import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  contact: string;
  preferred_time?: string;
  treatment_type?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log('Received contact form data:', formData);

    // Save to database
    const { data: inquiry, error: dbError } = await supabase
      .from('contact_inquiries')
      .insert([{
        name: formData.name,
        contact: formData.contact,
        preferred_time: formData.preferred_time,
        treatment_type: formData.treatment_type,
        message: formData.message,
      }])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log('Contact inquiry saved to database:', inquiry);

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Ośrodek MyWay <noreply@osrodek-myway.pl>",
      to: ["kontakt@osrodek-myway.pl"],
      subject: `Nowe zapytanie kontaktowe od ${formData.name}`,
      html: `
        <h1>Nowe zapytanie kontaktowe</h1>
        <h2>Dane kontaktowe:</h2>
        <p><strong>Imię i nazwisko:</strong> ${formData.name}</p>
        <p><strong>Kontakt:</strong> ${formData.contact}</p>
        ${formData.preferred_time ? `<p><strong>Preferowany czas kontaktu:</strong> ${formData.preferred_time}</p>` : ''}
        ${formData.treatment_type ? `<p><strong>Rodzaj terapii:</strong> ${formData.treatment_type}</p>` : ''}
        ${formData.message ? `<h2>Wiadomość:</h2><p>${formData.message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>To zapytanie zostało automatycznie zapisane w systemie z ID: ${inquiry.id}</small></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({
      success: true,
      inquiry_id: inquiry.id,
      email_id: emailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
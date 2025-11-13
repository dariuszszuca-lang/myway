import emailjs from '@emailjs/browser';

// EmailJS configuration - replace these with your actual values
const EMAILJS_SERVICE_ID = 'service_xwxkzr4';
const EMAILJS_TEMPLATE_ID = 'template_7z80w1a'; 
const EMAILJS_PUBLIC_KEY = 'KpuuComBPWHCIs6ZT';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  contact: string;
  preferred_time?: string;
  treatment_type?: string;
  message?: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    console.log('EmailJS - Starting email send process');
    console.log('EmailJS - Service ID:', EMAILJS_SERVICE_ID);
    console.log('EmailJS - Template ID:', EMAILJS_TEMPLATE_ID);
    console.log('EmailJS - Public Key:', EMAILJS_PUBLIC_KEY);
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_contact: formData.contact,
      preferred_time: formData.preferred_time || 'Nie podano',
      treatment_type: formData.treatment_type || 'Nie wybrano',
      message: formData.message || 'Brak dodatkowych informacji',
      to_name: 'Ośrodek MyWay',
      reply_to: formData.contact,
    };

    console.log('EmailJS - Template params:', templateParams);

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS - Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('EmailJS - Error details:', error);
    throw new Error('Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.');
  }
};

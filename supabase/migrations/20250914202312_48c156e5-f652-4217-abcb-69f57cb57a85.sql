-- Create a table for contact inquiries
CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  preferred_time TEXT,
  treatment_type TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact inquiries (public form)
CREATE POLICY "Anyone can create contact inquiries" 
ON public.contact_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading contact inquiries (admin only)
CREATE POLICY "Only authenticated users can read contact inquiries" 
ON public.contact_inquiries 
FOR SELECT 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_inquiries_updated_at
BEFORE UPDATE ON public.contact_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
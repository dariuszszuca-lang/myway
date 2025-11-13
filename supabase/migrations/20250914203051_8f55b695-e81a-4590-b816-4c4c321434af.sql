-- Drop the overly restrictive SELECT policy
DROP POLICY "Only authenticated users can read contact inquiries" ON public.contact_inquiries;

-- Create a new policy that allows authenticated users to read contact inquiries
CREATE POLICY "Authenticated users can read contact inquiries" 
ON public.contact_inquiries 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Also create a policy for updating inquiries (for status management)
CREATE POLICY "Authenticated users can update contact inquiries" 
ON public.contact_inquiries 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);
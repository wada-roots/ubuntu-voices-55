-- Add RLS policies for admins to manage content submissions

-- Allow admins to view all content submissions
CREATE POLICY "Admins can view all submissions"
ON public.content_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to update any submission (approve/reject)
CREATE POLICY "Admins can update any submission"
ON public.content_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));
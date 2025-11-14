-- Create admin user if not exists
-- Note: This creates the user in the auth.users table with a default password
-- The admin will need to sign up first with email: admin@ubuntuvoices.com and password: admin123

-- Function to assign admin role to a specific user
CREATE OR REPLACE FUNCTION assign_admin_role(user_email TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id uuid;
BEGIN
  -- Get user ID from email
  SELECT id INTO v_user_id
  FROM auth.users
  WHERE email = user_email;
  
  -- If user exists, assign admin role (if not already assigned)
  IF v_user_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (v_user_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
END;
$$;

-- Instructions for setting up admin:
-- 1. Sign up at /auth with email: admin@ubuntuvoices.com and password: admin123
-- 2. Then run in SQL editor: SELECT assign_admin_role('admin@ubuntuvoices.com');
-- 3. Sign out and sign back in to activate admin privileges
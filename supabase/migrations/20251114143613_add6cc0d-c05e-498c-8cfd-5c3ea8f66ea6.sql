-- Drop and recreate the get_user_roles function with correct return type
DROP FUNCTION IF EXISTS public.get_user_roles(uuid);

CREATE FUNCTION public.get_user_roles(_user_id uuid)
RETURNS app_role[]
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT ARRAY_AGG(role)
  FROM public.user_roles
  WHERE user_id = _user_id
$$;
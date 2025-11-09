# Admin Setup Instructions

## Creating the Default Admin Account

To set up your admin account with the credentials you requested:

### Step 1: Sign Up
1. Navigate to `/auth` page in your application
2. Sign up with these credentials:
   - **Email**: `admin@ubuntuvoices.com`
   - **Password**: `admin123`

### Step 2: Assign Admin Role
After creating the account, you need to assign the admin role using Supabase:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run this query (replace `USER_EMAIL` with the email you used):

```sql
-- First, get the user ID
SELECT id, email FROM auth.users WHERE email = 'admin@ubuntuvoices.com';

-- Then, insert the admin role using the returned ID
INSERT INTO public.user_roles (user_id, role)
VALUES ('PASTE_USER_ID_HERE', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;
```

Alternatively, you can run this single query:

```sql
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users 
WHERE email = 'admin@ubuntuvoices.com'
ON CONFLICT (user_id, role) DO NOTHING;
```

### Step 3: Verify Access
1. Log out and log back in
2. You should now have access to the admin dashboard at `/admin`

## Features Implemented

### Admin Features:
✅ **Content Review & Publishing** - Approve/reject submissions and publish to main dashboard
✅ **User Management** - View and manage user roles
✅ **Dashboard Analytics** - Track submissions and user statistics
✅ **Modern Sidebar Navigation** - Easy navigation between admin sections

### Author Features:
✅ **Content Submission** - Submit stories, poetry, and articles
✅ **Submission Tracking** - View status of all submissions
✅ **Community Interaction** - Comment and discuss published content with other authors
✅ **Author Profiles** - Automatic profile creation on signup

### Public Features:
✅ **Published Content Display** - Latest approved content on homepage
✅ **Dynamic Content Pages** - Stories and Poetry pages pull from database
✅ **Rich Heritage Design** - Updated color scheme with Kenyan heritage theme

## Database Tables Created:
- `content_comments` - For author interactions
- `profiles` - For user profile information
- Enhanced RLS policies for secure data access

Note: The security warning about leaked password protection is a Supabase recommendation to enable additional password security features in your project settings, which you can do later.

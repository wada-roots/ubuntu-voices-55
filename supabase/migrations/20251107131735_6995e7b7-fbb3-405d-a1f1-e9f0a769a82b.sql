-- Create the update timestamp function
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Create content_submissions table for cultural content
create table public.content_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  content text not null,
  content_type text not null,
  tribe text,
  status text not null default 'pending',
  review_notes text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  constraint title_length check (char_length(title) between 5 and 200),
  constraint content_length check (char_length(content) between 10 and 50000),
  constraint valid_status check (status in ('pending', 'approved', 'rejected'))
);

-- Enable RLS
alter table public.content_submissions enable row level security;

-- Users can view their own submissions
create policy "Users can view their own submissions"
on public.content_submissions
for select
to authenticated
using (auth.uid() = user_id);

-- Users can create their own submissions
create policy "Users can create submissions"
on public.content_submissions
for insert
to authenticated
with check (auth.uid() = user_id);

-- Users can update their own pending submissions
create policy "Users can update their pending submissions"
on public.content_submissions
for update
to authenticated
using (auth.uid() = user_id and status = 'pending')
with check (auth.uid() = user_id and status = 'pending');

-- Create trigger for automatic timestamp updates
create trigger update_content_submissions_updated_at
before update on public.content_submissions
for each row
execute function update_updated_at_column();
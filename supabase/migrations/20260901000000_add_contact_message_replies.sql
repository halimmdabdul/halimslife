-- Lets admins send a reply email to the sender directly from /admin/messages
-- and /admin/scholarship-support, and keeps a record of what was sent.
alter table public.contact_messages
  add column if not exists admin_reply text,
  add column if not exists replied_at timestamptz;

comment on column public.contact_messages.admin_reply is
  'The reply text an admin sent to the sender''s email via the admin panel.';
comment on column public.contact_messages.replied_at is
  'When the admin reply email was sent.';

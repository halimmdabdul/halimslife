-- Allow the logged-in "Scholarship Support" request form (submitted from
-- /account/scholarship-support) to reuse the contact_messages table with its
-- own topic value, alongside the public contact form's existing topics.
alter table public.contact_messages
  drop constraint if exists contact_messages_topic_check;

alter table public.contact_messages
  add constraint contact_messages_topic_check
  check (topic in ('general', 'academy', 'engineering', 'research', 'career', 'collaboration', 'scholarship-support'));

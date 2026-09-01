-- Lets a logged-in user read their own submitted contact_messages rows (and
-- any admin_reply on them) from /account/scholarship-support. Previously
-- only admins could select from this table.
drop policy if exists "Users can read their own contact messages" on public.contact_messages;
create policy "Users can read their own contact messages"
on public.contact_messages
for select
to authenticated
using (user_id = (select auth.uid()));

-- When an applicant sends a follow-up message on an already-"replied"
-- scholarship-support request, the request should show up as needing admin
-- attention again. Applicants have no UPDATE grant on contact_messages (only
-- admins do, and RLS can't be scoped to a subset of columns), so this
-- SECURITY DEFINER function lets an owner flip their own request back to
-- 'new' without granting them a general-purpose UPDATE policy.
create or replace function public.reopen_scholarship_request(p_request_id bigint)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.contact_messages
  set status = 'new', is_read = false
  where id = p_request_id
    and user_id = auth.uid()
    and topic = 'scholarship-support';
end;
$$;

grant execute on function public.reopen_scholarship_request(bigint) to authenticated;

comment on function public.reopen_scholarship_request(bigint) is
  'Called by an applicant after they send a scholarship-support follow-up reply, so the request reappears as "new" for admins instead of staying marked "replied".';

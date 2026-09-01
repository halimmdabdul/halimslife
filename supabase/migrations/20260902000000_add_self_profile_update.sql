-- Lets a signed-in user edit their own display name from /account, without
-- opening a privilege-escalation path: the existing "Admins can update
-- profiles" policy plus a table-wide `role` column grant meant any new
-- self-row UPDATE policy would let a user set their own role to admin.
-- Fix: revoke column-level UPDATE on `role` from authenticated entirely and
-- move admin role changes into a security-definer RPC that re-checks
-- is_admin() and the "can't demote yourself" rule internally.

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (id = (select auth.uid()))
with check (id = (select auth.uid()));

revoke update (role) on table public.profiles from authenticated;
grant update (full_name, updated_at) on table public.profiles to authenticated;

create or replace function public.admin_set_user_role(target_user_id uuid, new_role public.app_role)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not (select public.is_admin()) then
    raise exception 'Only administrators can change user roles.';
  end if;

  if target_user_id = (select auth.uid()) and new_role <> 'admin' then
    raise exception 'You cannot remove your own admin role.';
  end if;

  update public.profiles
  set role = new_role, updated_at = now()
  where id = target_user_id;
end;
$$;

revoke all on function public.admin_set_user_role(uuid, public.app_role) from public;
grant execute on function public.admin_set_user_role(uuid, public.app_role) to authenticated;

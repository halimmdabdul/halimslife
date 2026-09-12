create or replace function public.admin_delete_user_account(target_user_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  deleted_count integer;
begin
  if not (select public.is_admin()) then
    raise exception 'Only administrators can delete user accounts.';
  end if;

  if target_user_id is null then
    raise exception 'A user account is required.';
  end if;

  if target_user_id = (select auth.uid()) then
    raise exception 'You cannot delete your own account.';
  end if;

  delete from auth.users
  where id = target_user_id;

  get diagnostics deleted_count = row_count;
  if deleted_count = 0 then
    raise exception 'User account was not found.';
  end if;
end;
$$;

revoke all on function public.admin_delete_user_account(uuid) from public;
grant execute on function public.admin_delete_user_account(uuid) to authenticated;

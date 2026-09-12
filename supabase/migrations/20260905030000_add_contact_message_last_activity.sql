-- The admin scholarship-support list sorts by created_at, so a request that
-- gets a new follow-up (from either side) doesn't move back to the top —
-- it can sit unnoticed on a later page even after its status flips back to
-- 'new'. Track the most recent activity separately and keep it current with
-- a trigger, so the admin list can sort by it instead.
alter table public.contact_messages
  add column if not exists last_activity_at timestamptz not null default now();

update public.contact_messages
set last_activity_at = coalesce(replied_at, created_at)
where last_activity_at = created_at;

create or replace function public.touch_contact_message_activity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.contact_messages
  set last_activity_at = new.created_at
  where id = new.request_id;
  return new;
end;
$$;

drop trigger if exists contact_message_replies_touch_activity
  on public.contact_message_replies;
create trigger contact_message_replies_touch_activity
after insert on public.contact_message_replies
for each row execute function public.touch_contact_message_activity();

create index if not exists contact_messages_scholarship_activity_idx
  on public.contact_messages(last_activity_at desc)
  where topic = 'scholarship-support';

comment on column public.contact_messages.last_activity_at is
  'Most recent activity on this request: its creation, or the newest contact_message_replies row. Kept current by a trigger; used to sort the admin scholarship-support list so followed-up requests resurface.';

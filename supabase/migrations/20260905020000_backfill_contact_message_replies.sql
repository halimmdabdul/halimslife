-- Scholarship-support requests replied to before contact_message_replies
-- existed only have their reply in contact_messages.admin_reply. Copy each
-- one into the new thread table as the first "admin" message, so every
-- request's conversation can be rendered from contact_message_replies alone
-- (no need to special-case old vs. new requests in the UI). Guarded by
-- "not exists" so this is safe to run more than once.
insert into public.contact_message_replies (request_id, sender, message, created_at)
select cm.id, 'admin', cm.admin_reply, coalesce(cm.replied_at, cm.created_at)
from public.contact_messages cm
where cm.topic = 'scholarship-support'
  and cm.admin_reply is not null
  and not exists (
    select 1 from public.contact_message_replies cmr
    where cmr.request_id = cm.id
  );

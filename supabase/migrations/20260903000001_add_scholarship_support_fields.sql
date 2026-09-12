-- The "Scholarship Support" request form (/account/scholarship-support)
-- collects structured fields (target country, target degree, background,
-- goals, an optional Drive link) but they were only ever concatenated into
-- the shared contact_messages.message text column. That made the admin
-- list unfilterable and unparseable beyond regenerating the text. Store the
-- structured fields in their own nullable columns (only populated for the
-- 'scholarship-support' topic) so /admin/scholarship-support can render and
-- filter on them directly, while other topics remain unaffected.
alter table public.contact_messages
  add column if not exists target_country text,
  add column if not exists target_degree text,
  add column if not exists background text,
  add column if not exists goals text,
  add column if not exists drive_link text;

alter table public.contact_messages
  drop constraint if exists contact_messages_target_country_check;
alter table public.contact_messages
  add constraint contact_messages_target_country_check
  check (target_country is null or target_country in ('usa', 'canada', 'korea', 'switzerland', 'italy', 'japan', 'undecided'));

alter table public.contact_messages
  drop constraint if exists contact_messages_target_degree_check;
alter table public.contact_messages
  add constraint contact_messages_target_degree_check
  check (target_degree is null or target_degree in ('bachelors', 'masters', 'phd', 'undecided'));

create index if not exists contact_messages_scholarship_country_idx
  on public.contact_messages(target_country)
  where topic = 'scholarship-support';

create index if not exists contact_messages_scholarship_degree_idx
  on public.contact_messages(target_degree)
  where topic = 'scholarship-support';

comment on column public.contact_messages.target_country is
  'Scholarship Support requests only: the applicant''s target country code.';
comment on column public.contact_messages.target_degree is
  'Scholarship Support requests only: the applicant''s target degree level code.';
comment on column public.contact_messages.background is
  'Scholarship Support requests only: the applicant''s current education/background, as free text.';
comment on column public.contact_messages.goals is
  'Scholarship Support requests only: what kind of help the applicant is asking for.';
comment on column public.contact_messages.drive_link is
  'Scholarship Support requests only: an optional Google Drive link to a CV/transcript.';

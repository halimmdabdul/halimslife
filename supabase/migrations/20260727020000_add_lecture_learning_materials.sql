alter table public.lectures
  add column if not exists overview text,
  add column if not exists study_notes text,
  add column if not exists practice_test jsonb not null default '{}'::jsonb;

update public.lectures
set
  overview = coalesce(overview, content),
  study_notes = coalesce(study_notes, content)
where content is not null
  and (overview is null or study_notes is null);

alter table public.lectures
  add constraint lectures_practice_test_is_object
  check (jsonb_typeof(practice_test) = 'object') not valid;

alter table public.lectures
  validate constraint lectures_practice_test_is_object;

comment on column public.lectures.overview is 'Overview content shown in the lesson Overview tab.';
comment on column public.lectures.study_notes is 'Detailed notes shown in the Study notes tab.';
comment on column public.lectures.practice_test is 'Question, options, and correct answer shown in the Practice test tab.';

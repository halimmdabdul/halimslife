create unique index if not exists courses_title_unique_ci
  on public.courses (lower(btrim(title)));

create unique index if not exists lectures_section_title_unique_ci
  on public.lectures (section_id, lower(btrim(title)));

comment on index public.courses_title_unique_ci is
  'Prevents duplicate course titles, ignoring capitalization and surrounding spaces.';

comment on index public.lectures_section_title_unique_ci is
  'Prevents duplicate lecture titles within the same course section, ignoring capitalization and surrounding spaces.';

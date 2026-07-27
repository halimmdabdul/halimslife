do $$
declare
  renamed_count integer;
  rename_pass integer := 0;
begin
  loop
    rename_pass := rename_pass + 1;

    with ranked_courses as (
      select
        id,
        row_number() over (
          partition by lower(btrim(title))
          order by id
        ) as duplicate_number
      from public.courses
    )
    update public.courses as course
    set title =
      left(
        btrim(course.title),
        greatest(1, 160 - char_length(format(' (%s)', ranked_courses.duplicate_number)))
      ) || format(' (%s)', ranked_courses.duplicate_number)
    from ranked_courses
    where course.id = ranked_courses.id
      and ranked_courses.duplicate_number > 1;

    get diagnostics renamed_count = row_count;
    exit when renamed_count = 0;

    if rename_pass >= 20 then
      raise exception 'Unable to safely rename every duplicate course title.';
    end if;
  end loop;
end
$$;

do $$
declare
  renamed_count integer;
  rename_pass integer := 0;
begin
  loop
    rename_pass := rename_pass + 1;

    with ranked_lectures as (
      select
        id,
        row_number() over (
          partition by section_id, lower(btrim(title))
          order by id
        ) as duplicate_number
      from public.lectures
    )
    update public.lectures as lecture
    set title =
      left(
        btrim(lecture.title),
        greatest(1, 200 - char_length(format(' (%s)', ranked_lectures.duplicate_number)))
      ) || format(' (%s)', ranked_lectures.duplicate_number)
    from ranked_lectures
    where lecture.id = ranked_lectures.id
      and ranked_lectures.duplicate_number > 1;

    get diagnostics renamed_count = row_count;
    exit when renamed_count = 0;

    if rename_pass >= 20 then
      raise exception 'Unable to safely rename every duplicate lecture title.';
    end if;
  end loop;
end
$$;

create unique index if not exists courses_title_unique_ci
  on public.courses (lower(btrim(title)));

create unique index if not exists lectures_section_title_unique_ci
  on public.lectures (section_id, lower(btrim(title)));

comment on index public.courses_title_unique_ci is
  'Prevents duplicate course titles, ignoring capitalization and surrounding spaces.';

comment on index public.lectures_section_title_unique_ci is
  'Prevents duplicate lecture titles within the same course section, ignoring capitalization and surrounding spaces.';

create table if not exists public.site_settings (
  id boolean primary key default true check (id),
  google_site_verification text check (google_site_verification is null or char_length(google_site_verification) <= 200),
  bing_site_verification text check (bing_site_verification is null or char_length(bing_site_verification) <= 200),
  facebook_pixel_id text check (facebook_pixel_id is null or char_length(facebook_pixel_id) <= 60),
  google_analytics_id text check (google_analytics_id is null or char_length(google_analytics_id) <= 60),
  google_tag_manager_id text check (google_tag_manager_id is null or char_length(google_tag_manager_id) <= 60),
  updated_at timestamptz not null default now()
);

insert into public.site_settings (id)
values (true)
on conflict (id) do nothing;

alter table public.site_settings enable row level security;

drop policy if exists "Anyone can read site settings"
  on public.site_settings;
create policy "Anyone can read site settings"
on public.site_settings
for select
to anon, authenticated
using (true);

drop policy if exists "Admins can update site settings"
  on public.site_settings;
create policy "Admins can update site settings"
on public.site_settings
for update
to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

grant select on table public.site_settings to anon, authenticated;
grant update (
  google_site_verification,
  bing_site_verification,
  facebook_pixel_id,
  google_analytics_id,
  google_tag_manager_id,
  updated_at
) on table public.site_settings to authenticated;

comment on table public.site_settings is
  'Singleton row holding site-wide SEO/verification and tracking IDs, editable from the admin dashboard.';

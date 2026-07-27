alter table public.courses
  add column if not exists cover_image text,
  add column if not exists cover_storage_path text;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'course-images',
  'course-images',
  true,
  3145728,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view course images" on storage.objects;
create policy "Public can view course images"
on storage.objects for select to anon, authenticated
using (bucket_id = 'course-images');

drop policy if exists "Admins can upload course images" on storage.objects;
create policy "Admins can upload course images"
on storage.objects for insert to authenticated
with check (bucket_id = 'course-images' and (select public.is_admin()));

drop policy if exists "Admins can update course images" on storage.objects;
create policy "Admins can update course images"
on storage.objects for update to authenticated
using (bucket_id = 'course-images' and (select public.is_admin()))
with check (bucket_id = 'course-images' and (select public.is_admin()));

drop policy if exists "Admins can delete course images" on storage.objects;
create policy "Admins can delete course images"
on storage.objects for delete to authenticated
using (bucket_id = 'course-images' and (select public.is_admin()));

comment on column public.courses.cover_image is
  'Public URL for the Academy course featured image.';
comment on column public.courses.cover_storage_path is
  'Storage object path when the featured image was uploaded by an admin.';

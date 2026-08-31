-- Lets admins create/edit/publish blog posts from /admin/blog (previously
-- posts could only be inserted directly via SQL/Supabase Studio).
alter table public.posts
  add column if not exists cover_storage_path text;

comment on column public.posts.cover_storage_path is
  'Storage object path when the cover image was uploaded by an admin (null when an external URL was used instead).';

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-images',
  'blog-images',
  true,
  3145728,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view blog images" on storage.objects;
create policy "Public can view blog images"
on storage.objects for select to anon, authenticated
using (bucket_id = 'blog-images');

drop policy if exists "Admins can upload blog images" on storage.objects;
create policy "Admins can upload blog images"
on storage.objects for insert to authenticated
with check (bucket_id = 'blog-images' and (select public.is_admin()));

drop policy if exists "Admins can update blog images" on storage.objects;
create policy "Admins can update blog images"
on storage.objects for update to authenticated
using (bucket_id = 'blog-images' and (select public.is_admin()))
with check (bucket_id = 'blog-images' and (select public.is_admin()));

drop policy if exists "Admins can delete blog images" on storage.objects;
create policy "Admins can delete blog images"
on storage.objects for delete to authenticated
using (bucket_id = 'blog-images' and (select public.is_admin()));

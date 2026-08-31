-- Optional per-post SEO overrides, editable from /admin/blog. When left
-- blank, the site falls back to the post's normal title/excerpt.
alter table public.posts
  add column if not exists meta_title text,
  add column if not exists meta_description text;

comment on column public.posts.meta_title is
  'Optional <title>/OpenGraph title override for search engines. Falls back to the post title when null.';
comment on column public.posts.meta_description is
  'Optional meta description/OpenGraph description override for search engines. Falls back to the post excerpt when null.';

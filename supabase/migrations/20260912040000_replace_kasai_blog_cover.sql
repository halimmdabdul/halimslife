-- Replace the watercolor banner with the Kasai Global Center cooking-event photo.
update public.posts
set
  cover_image = '/images/blog/kasai-global-center-cooking-cover.webp',
  cover_storage_path = null,
  updated_at = now()
where slug in (
  'bangladesh-flag-at-kasai-global-center',
  'bangladesh-flag-at-kasai-global-center-ja'
);

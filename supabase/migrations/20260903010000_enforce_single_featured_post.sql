-- Defense in depth: even if application code has a bug, the database
-- itself won't allow more than one post to carry is_featured = true.
create unique index if not exists posts_single_featured_idx
  on public.posts (is_featured)
  where is_featured;

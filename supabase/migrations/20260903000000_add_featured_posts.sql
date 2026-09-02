-- Lets an admin pin one blog post as permanently "featured" on /blog,
-- instead of the featured slot always being whichever post is most recent.
alter table public.posts
  add column if not exists is_featured boolean not null default false;

update public.posts
set is_featured = true
where slug = 'bangladesh-to-japan-career-journey';

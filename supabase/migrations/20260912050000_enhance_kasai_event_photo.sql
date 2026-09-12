-- Replace the small event photo with the enhanced, people-and-flags-focused crop.
update public.posts
set
  content = replace(
    content,
    'https://halimslife.com/images/blog/kasai-global-center-community-event.webp',
    'https://halimslife.com/images/blog/kasai-global-center-community-event-enhanced.webp'
  ),
  updated_at = now()
where slug in (
  'bangladesh-flag-at-kasai-global-center',
  'bangladesh-flag-at-kasai-global-center-ja'
)
  and content like '%kasai-global-center-community-event.webp%';

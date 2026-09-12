-- Enrich the exchange scene with a Bangladeshi cultural exhibition background.
update public.posts
set
  content = replace(
    content,
    'https://halimslife.com/images/blog/kasai-global-center-bangladesh-japan-exchange.webp',
    'https://halimslife.com/images/blog/kasai-global-center-bangladesh-culture-exchange.webp'
  ),
  updated_at = now()
where slug in (
  'bangladesh-flag-at-kasai-global-center',
  'bangladesh-flag-at-kasai-global-center-ja'
)
  and content like '%kasai-global-center-bangladesh-japan-exchange.webp%';

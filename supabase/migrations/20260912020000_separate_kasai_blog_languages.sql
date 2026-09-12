-- Keep the Bengali and Japanese editions on separate shareable pages.
update public.posts
set
  content = rtrim(split_part(content, E'\n---\n\n# 日本語版', 1)),
  updated_at = now()
where slug = 'bangladesh-flag-at-kasai-global-center'
  and content like '%# 日本語版%';

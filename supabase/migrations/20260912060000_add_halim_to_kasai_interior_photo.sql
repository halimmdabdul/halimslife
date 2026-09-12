-- Use the reader-provided portrait composite in the Kasai Global Center section.
update public.posts
set
  content = replace(
    replace(
      content,
      'https://halimslife.com/images/blog/kasai-global-center-interior.webp',
      'https://halimslife.com/images/blog/kasai-global-center-interior-with-halim.webp'
    ),
    '_ছবিতে Kasai City Global Center-এর ভেতরের স্বাগত ডেস্ক—যে জায়গাটি এখন আমার কাছে খুব পরিচিত।_',
    '_Kasai City Global Center-এর স্বাগত ডেস্কে আমি—যে জায়গাটি এখন আমার কাছে খুব পরিচিত।_'
  ),
  updated_at = now()
where slug = 'bangladesh-flag-at-kasai-global-center'
  and content like '%kasai-global-center-interior.webp%';

update public.posts
set
  content = replace(
    replace(
      content,
      'https://halimslife.com/images/blog/kasai-global-center-interior.webp',
      'https://halimslife.com/images/blog/kasai-global-center-interior-with-halim.webp'
    ),
    '_加西市グローバルセンターの受付。今では私にとって、とても親しみのある場所です。_',
    '_加西市グローバルセンターの受付にて。今では私にとって、とても親しみのある場所です。_'
  ),
  updated_at = now()
where slug = 'bangladesh-flag-at-kasai-global-center-ja'
  and content like '%kasai-global-center-interior.webp%';

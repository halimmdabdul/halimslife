-- Present the Kasai interior as a transparent AI-composed cultural-exchange scene.
update public.posts
set
  content = replace(
    replace(
      content,
      'https://halimslife.com/images/blog/kasai-global-center-interior-with-halim.webp',
      'https://halimslife.com/images/blog/kasai-global-center-bangladesh-japan-exchange.webp'
    ),
    '_Kasai City Global Center-এর স্বাগত ডেস্কে আমি—যে জায়গাটি এখন আমার কাছে খুব পরিচিত।_',
    '_AI দিয়ে তৈরি প্রতীকী দৃশ্য: Kasai City Global Center-এ বাংলাদেশ–জাপান বন্ধুত্ব ও সাংস্কৃতিক বিনিময়।_'
  ),
  updated_at = now()
where slug = 'bangladesh-flag-at-kasai-global-center'
  and content like '%kasai-global-center-interior-with-halim.webp%';

update public.posts
set
  content = replace(
    replace(
      content,
      'https://halimslife.com/images/blog/kasai-global-center-interior-with-halim.webp',
      'https://halimslife.com/images/blog/kasai-global-center-bangladesh-japan-exchange.webp'
    ),
    '_加西市グローバルセンターの受付にて。今では私にとって、とても親しみのある場所です。_',
    '_AIで制作したイメージ：加西市グローバルセンターにおけるバングラデシュと日本の友好・文化交流。_'
  ),
  updated_at = now()
where slug = 'bangladesh-flag-at-kasai-global-center-ja'
  and content like '%kasai-global-center-interior-with-halim.webp%';

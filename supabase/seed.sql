-- Halim's Life development seed data
--
-- These users use randomly generated, unknown passwords on every fresh seed.
-- They are intended for testing the admin user list and role management only.
-- Create a real test login through /signup when interactive login is required.

begin;

create extension if not exists pgcrypto with schema extensions;

insert into auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
)
values
  (
    '00000000-0000-0000-0000-000000000000',
    '10000000-0000-4000-8000-000000000001',
    'authenticated',
    'authenticated',
    'ayesha.rahman@example.com',
    extensions.crypt(
      gen_random_uuid()::text || gen_random_uuid()::text,
      extensions.gen_salt('bf')
    ),
    now(),
    '{"provider":"email","providers":["email"]}'::jsonb,
    '{"full_name":"Ayesha Rahman"}'::jsonb,
    now(),
    now(),
    '',
    '',
    '',
    ''
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    '10000000-0000-4000-8000-000000000002',
    'authenticated',
    'authenticated',
    'tanvir.hasan@example.com',
    extensions.crypt(
      gen_random_uuid()::text || gen_random_uuid()::text,
      extensions.gen_salt('bf')
    ),
    now(),
    '{"provider":"email","providers":["email"]}'::jsonb,
    '{"full_name":"Tanvir Hasan"}'::jsonb,
    now(),
    now(),
    '',
    '',
    '',
    ''
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    '10000000-0000-4000-8000-000000000003',
    'authenticated',
    'authenticated',
    'nusrat.jahan@example.com',
    extensions.crypt(
      gen_random_uuid()::text || gen_random_uuid()::text,
      extensions.gen_salt('bf')
    ),
    now(),
    '{"provider":"email","providers":["email"]}'::jsonb,
    '{"full_name":"Nusrat Jahan"}'::jsonb,
    now(),
    now(),
    '',
    '',
    '',
    ''
  )
on conflict (id) do update
set
  email = excluded.email,
  raw_app_meta_data = excluded.raw_app_meta_data,
  raw_user_meta_data = excluded.raw_user_meta_data,
  email_confirmed_at = excluded.email_confirmed_at,
  updated_at = now();

insert into auth.identities (
  id,
  provider_id,
  user_id,
  identity_data,
  provider,
  last_sign_in_at,
  created_at,
  updated_at
)
values
  (
    '20000000-0000-4000-8000-000000000001',
    '10000000-0000-4000-8000-000000000001',
    '10000000-0000-4000-8000-000000000001',
    '{"sub":"10000000-0000-4000-8000-000000000001","email":"ayesha.rahman@example.com","email_verified":true,"phone_verified":false}'::jsonb,
    'email',
    now(),
    now(),
    now()
  ),
  (
    '20000000-0000-4000-8000-000000000002',
    '10000000-0000-4000-8000-000000000002',
    '10000000-0000-4000-8000-000000000002',
    '{"sub":"10000000-0000-4000-8000-000000000002","email":"tanvir.hasan@example.com","email_verified":true,"phone_verified":false}'::jsonb,
    'email',
    now(),
    now(),
    now()
  ),
  (
    '20000000-0000-4000-8000-000000000003',
    '10000000-0000-4000-8000-000000000003',
    '10000000-0000-4000-8000-000000000003',
    '{"sub":"10000000-0000-4000-8000-000000000003","email":"nusrat.jahan@example.com","email_verified":true,"phone_verified":false}'::jsonb,
    'email',
    now(),
    now(),
    now()
  )
on conflict (id) do update
set
  provider_id = excluded.provider_id,
  user_id = excluded.user_id,
  identity_data = excluded.identity_data,
  provider = excluded.provider,
  updated_at = now();

update public.profiles
set
  role = 'admin',
  updated_at = now()
where id = '10000000-0000-4000-8000-000000000001';

insert into public.posts (
  slug,
  title,
  excerpt,
  content,
  cover_image,
  author_id,
  published,
  published_at
)
values
  (
    'bangladesh-to-japan-career-journey',
    'বাংলাদেশ থেকে জাপান: আমার ক্যারিয়ার জার্নি',
    'নতুন দেশে technology career গড়তে শেখা, discipline এবং consistency কেন সবচেয়ে গুরুত্বপূর্ণ।',
    '# শুরুটা যেখানে হয়েছিল—বাংলাদেশ

ছোটবেলা থেকেই আমার মাথায় দুটো প্রশ্ন ঘুরত: "কেন" আর "কীভাবে"। কোনো যন্ত্র কীভাবে কাজ করে, একটা সমস্যা কেন এভাবেই সমাধান হয়। এই কৌতূহল থেকেই প্রযুক্তির দিকে ঝোঁকা। বাংলাদেশে বেড়ে ওঠার সময় resource সীমিত ছিল। ইন্টারনেট স্পিড কম, বাংলায় ভালো learning material প্রায় ছিলই না, আর প্রোগ্রামিং নিয়ে আলোচনা করার মতো মানুষও হাতে গোনা।

তারপরও প্রতিদিন একটু একটু করে শেখা চালিয়ে গিয়েছিলাম। তখন বুঝিনি এসব ছোট ছোট নিয়মিত অভ্যাস কোথায় নিয়ে যাবে, কিন্তু এখন পেছন ফিরে দেখলে সেটাই ছিল ভিত্তি।

## Scholarship আর Japan যাওয়ার সিদ্ধান্ত

Undergraduate শেষ করার পর একটা প্রশ্ন সামনে দাঁড়াল: দেশে থেকে এগোব, নাকি বাইরে গিয়ে নিজেকে challenge করব। Japan-এর কথা মাথায় আসে কয়েকটা কারণে। Technology-তে world-class research, কাজের প্রতি discipline আর quality নিয়ে যে সুনাম, আর একটা scholarship route যেটা আর্থিকভাবে সম্ভব করে তুলেছিল ব্যাপারটা।

Scholarship-এর application process সহজ ছিল না। Document ready করা, প্রতিটা deadline ঠিকমতো মেনে চলা, আর গবেষণার আগ্রহ এমনভাবে লেখা যাতে reviewer বুঝতে পারেন কেন এই আবেদন বিবেচনা করা উচিত—এসব মিলিয়ে বেশ কয়েক মাসের প্রস্তুতি লেগেছিল। শেষমেশ scholarship পাওয়ার পর প্রথমবার বাংলাদেশ ছেড়ে Japan-এ পা রাখি।

## Shizuoka University: প্রথম কয়েক মাস

Shizuoka-তে নামার পর প্রথম কয়েক সপ্তাহ সত্যিই কঠিন ছিল। ব্যাংক account খোলা, supermarket-এ কেনাকাটা করা—দৈনন্দিন সবচেয়ে সাধারণ কাজগুলোতেও একটা অসহায়তা কাজ করত। Class-রুম English-medium হলেও campus-এর বাইরে জাপানি ভাষা না বোঝার frustration প্রায় প্রতিদিনের সঙ্গী ছিল।

কিন্তু কাজের চাপে আর নতুন পরিবেশে মানিয়ে নিতে নিতে জিনিসগুলো একটু একটু সহজ হতে থাকল। Fukuta Laboratory-তে Master''s in Computer Science-এর গবেষণা শুরু হলো—প্রথমে Game Theory ও Multi-Agent Systems নিয়ে, পরে Health Management-এর জন্য Recommender Systems নিয়ে। নিজের গবেষণার ফলাফল প্রথমবার একটা conference paper হিসেবে দেখার মুহূর্তটা এখনও মনে আছে। শেষ পর্যন্ত IEEE ও IEICE-তে দুটো কাজ publish হয়েছিল।

গবেষণা থেকে যা সবচেয়ে বেশি শিখেছি তা হলো ধৈর্য ধরে "কেন"-এর উত্তর খোঁজা। একটা experiment বারবার fail হয়, data-তে কোনো pattern দেখা যায় না, তারপর হঠাৎ একদিন সব টুকরো মিলে যায়। এখন কোনো সমস্যায় পড়লে প্রথমেই assumption না ধরে data ও evidence খোঁজার চেষ্টা করি—এই অভ্যাসটা industry-তেও কাজে লেগেছে।

## Niche Creation: ল্যাব থেকে factory floor

Master''s শেষ করে প্রথম full-time job আসে Niche Creation-এ, AI, Robotics ও Computer Vision নিয়ে। এখানে কাজটা research-এর চেয়ে সম্পূর্ণ ভিন্ন ছিল—এখানে theory-কে সরাসরি চলমান যন্ত্রে রূপান্তর করতে হতো।

Robotic picking system, visual inspection, industrial camera আর PLC নিয়ে কাজ করতে করতে বুঝেছিলাম software শুধু কোডে সীমাবদ্ধ থাকে না, physical world-এর সাথে নিখুঁতভাবে মিলিয়ে চলতে হয়। Python, OpenCV আর YOLO দিয়ে যে automation solution তৈরি হয়েছিল সেগুলো সরাসরি factory floor-এ প্রতিদিন চলত—একটা bug মানেই সরাসরি production-এ প্রভাব, কোনো "পরে ঠিক করে দেব" নেই।

এই সময়ের একটা project আমার কাছে বিশেষভাবে গুরুত্বপূর্ণ ছিল: paralysis-আক্রান্ত রোগীদের জন্য একটা hospital monitoring system। এই কাজ করতে গিয়ে প্রথমবার সত্যিকারভাবে বুঝেছিলাম technology যখন সরাসরি কারো দৈনন্দিন জীবন সহজ করে দেয়, তখন সেই কাজের একটা আলাদা ওজন থাকে।

## Aspark-এ এখন

এখন Aspark Co., Ltd.-এ System Engineer হিসেবে কাজ করছি—battery manufacturing software, computer vision, আর automated reporting ও decision-support system নিয়ে। এখানে বড় শিক্ষা হলো, individual talent-এর চেয়ে বেশি গুরুত্বপূর্ণ team-এর সাথে ঠিকমতো কাজ করা, quality নিয়ে আপস না করা, আর একটা ছোট decision-ও যে দীর্ঘমেয়াদে কতটা প্রভাব ফেলতে পারে সেটা বোঝা।

## আজ যা মনে হয়

বাংলাদেশ থেকে Japan পর্যন্ত এই পুরো পথে—scholarship application-এর রাত জাগা দিন, Fukuta Lab-এর research paper, Niche Creation-এর factory floor, আর এখন Aspark-এর দায়িত্ব—একটা জিনিস মোটামুটি সবখানেই ছিল: প্রশ্ন করে যাওয়া, লেগে থাকা, আর যা শিখেছি তা অন্যদের সাথে ভাগ করে নেওয়া।

Bengali-friendly learning resource বানানো বা কাউকে scholarship নিয়ে guide করা—এই কাজগুলো করার সময় আসলে সেই নিজেকেই সাহায্য করছি, যে একদিন বাংলায় ভালো কোনো resource খুঁজে পায়নি। Japan-এ পড়াশোনা বা career গড়তে চাইলে জেনে রাখুন, পথটা সহজ না, কিন্তু ঠিকমতো প্রস্তুতি নিয়ে এগোলে সম্ভব।

আমার scholarship guide-গুলো দেখতে পারেন, আর নিজের প্রশ্ন থাকলে যোগাযোগ করুন।',
    null,
    '10000000-0000-4000-8000-000000000001',
    true,
    now() - interval '7 days'
  ),
  (
    'personal-branding-for-bangladeshi-professionals',
    'বাংলাদেশি Professionals-দের জন্য Personal Branding',
    'নিজের কাজ, দক্ষতা এবং গল্প online-এ বিশ্বাসযোগ্যভাবে তুলে ধরার practical guide।',
    '# কেন Personal Branding দরকার

বাংলাদেশ থেকে যাঁরা technology, research বা অন্য কোনো professional field-এ কাজ করছেন, তাঁদের অনেকেই মনে করেন personal branding মানে নিজেকে সেলিব্রিটির মতো দেখানো, বড় বড় কথা বলা। বাস্তবে ব্যাপারটা এর ঠিক উল্টো।

Personal branding আসলে একটাই কাজ করে: আপনি কী জানেন, কীভাবে কাজ করেন, এবং অন্যদের কী value দিতে পারেন—সেটা স্পষ্ট ও বিশ্বাসযোগ্যভাবে সবার সামনে তুলে ধরা। একজন recruiter বা client যখন আপনার নাম শোনেন, তাঁরা যেন দ্রুত বুঝতে পারেন আপনি আসলে কোন ধরনের সমস্যা সমাধান করতে পারেন। এটাই মূল লক্ষ্য।

বাংলাদেশে এমন অনেক দক্ষ মানুষ আছেন যাঁদের কাজ resume-এর বাইরে কোথাও দেখা যায় না। একটা ভালো online presence সেই gap-টা পূরণ করতে পারে।

## কিছু ভুল ধারণা

শুরুতেই কয়েকটা common misconception পরিষ্কার করে নেওয়া যাক। "আমার কাছে impressive কিছু নেই"—এটাই সবচেয়ে বড় ভুল ধারণা। প্রতিদিন যা করছেন, যা শিখছেন, যে সমস্যাগুলো সমাধান করছেন সেটাই content; বিখ্যাত হওয়ার দরকার নেই, শুধু honest ও specific হলেই চলে।

আরেকটা ভুল ধারণা হলো, personal branding মানে সবসময় post করতে থাকা। আসলে consistency মানে quantity না, নিয়মিততা। মাসে একটা ভালো, চিন্তাশীল লেখা দশটা shallow post-এর চেয়ে বেশি কাজে দেয়। আর শুধু social media-র ওপর নির্ভর করাও ঠিক না—platform আপনার নিজের জায়গা না, algorithm বদলালে বা প্ল্যাটফর্ম বন্ধ হয়ে গেলে সব হারিয়ে যেতে পারে। তাই নিজের একটা জায়গা থাকা জরুরি।

## নিজের focus ঠিক করা

সবার আগে নিজেকে প্রশ্ন করুন—আমি কোন বিষয়ে মানুষকে সাহায্য করতে পারি। এটা হতে পারে কোনো technical skill (backend development, data analysis), কোনো industry knowledge (যেমন Japan-এ higher education), বা একটা নির্দিষ্ট সমস্যা-সমাধানের approach।

খুব সংকীর্ণ focus হওয়ার দরকার নেই, তবে খুব এলোমেলোও যেন না হয়। আপনার content দেখে মানুষ যদি বুঝতেই না পারে আপনি আসলে কিসের expert, branding তখন আর কাজ করবে না।

## একটা central home বানানো

একটা personal website বা portfolio—যেখানে কাজ, লেখা, আর যোগাযোগের তথ্য একসাথে থাকে—এটাই branding-এর ভিত্তি। এটা সম্পূর্ণ নিজের নিয়ন্ত্রণে থাকে, কোনো third-party প্ল্যাটফর্মের নিয়মের ওপর নির্ভর করে না। নাম search করলে এটাই আগে আসার সম্ভাবনা তৈরি করে, আর social media bio-তে একটা লিংক দিয়ে সবাইকে এখানে নিয়ে আসা যায়।

Website জটিল হওয়ার দরকার নেই। একটা পরিষ্কার "about", কিছু project বা কাজের example, আর যোগাযোগের একটা উপায়—এতটুকুই যথেষ্ট।

## লেখালেখি ও নিয়মিত share করা

Technical বা knowledge-based field-এ লেখালেখি সবচেয়ে শক্তিশালী hাতিয়ার। প্রতিটা লেখা দেখায় আপনি কীভাবে চিন্তা করেন, আর সেটাই "আমি এই কাজ করেছি" বলার চেয়ে বেশি বিশ্বাস তৈরি করে।

শুরু করার জন্য: সম্প্রতি সমাধান করা কোনো সমস্যার প্রক্রিয়া, নতুন কিছু শিখতে গিয়ে করা ভুল আর তা থেকে শেখা, বা নিজের field-এ নতুনদের জন্য কোনো practical পরামর্শ—এসব নিয়ে লিখতে পারেন। রীতিমতো নিয়মিত হওয়া জরুরি, মাসে একটা হলেও একটা নির্দিষ্ট rhythm বজায় রাখা ভালো।

## Real project ও evidence

কথায় বলার চেয়ে দেখানো বেশি বিশ্বাসযোগ্য। Portfolio বা website-এ সম্পন্ন করা project-এর সংক্ষিপ্ত বিবরণ থাকা উচিত—কী সমস্যা ছিল, কী সমাধান করা হয়েছে, ফলাফল কী এসেছে। সম্ভব হলে link, screenshot বা demo দিলে অন্যরা সরাসরি দেখতে পারেন। কোনো research, publication বা recognized অর্জন থাকলে সেটাও স্পষ্টভাবে উল্লেখ করা ভালো। Evidence-ভিত্তিক branding সবচেয়ে বেশি টেকে, কারণ এটা claim না, প্রমাণ।

## Community-তে value দেওয়া

Personal branding একমুখী প্রচার নয়, সম্পর্ক তৈরির প্রক্রিয়া। কারো প্রশ্নের উত্তর দেওয়া, কারো কাজে thoughtful feedback দেওয়া, নিজের শেখা জ্ঞান বিনামূল্যে ভাগ করে নেওয়া—এসব দীর্ঘমেয়াদে সবচেয়ে বেশি বিশ্বাসযোগ্যতা তৈরি করে। ধারাবাহিকভাবে value দিতে থাকলে মানুষ নিজে থেকেই আপনার কাজ share করা শুরু করে, আর এটাই সবচেয়ে organic ধরনের branding।

## কিছু সাধারণ ভুল

শুধু achievement-এর highlight দেখানো একটা ভুল—বাস্তব প্রক্রিয়া আর challenge-এর গল্প মানুষের সাথে বেশি connect করে। বিভিন্ন জায়গায় নিজেকে ভিন্নভাবে উপস্থাপন করাও বিশ্বাসযোগ্যতা কমিয়ে দেয়। শুধু English content-এর ওপর নির্ভর করাও একটা সীমাবদ্ধতা—বাংলায় content তৈরি করলে বাংলাদেশের প্রেক্ষাপটে অনেক বেশি মানুষের কাছে পৌঁছানো যায়। আর সবচেয়ে common ভুল হলো perfect হওয়ার অপেক্ষায় থাকা। প্রথম লেখাটা perfect হবে না, কিন্তু শুরু করাটাই আসল কথা।

## শুরু করার জন্য

আজই শুরু করতে চাইলে: এক লাইনে লিখুন আপনি কাকে, কীভাবে সাহায্য করেন। একটা simple website বা portfolio বানান, বা existing profile-গুলো গুছিয়ে নিন। সম্পন্ন করা ৩টা project-এর সংক্ষিপ্ত বিবরণ লিখুন। একটা platform বেছে নিয়ে প্রথম লেখাটা publish করুন। তারপর একটা rhythm ঠিক করে সেটা মেনে চলুন।

Personal branding রাতারাতি তৈরি হয় না। কিন্তু একবার শুরু করলে প্রতিটা ছোট পদক্ষেপ ধীরে হলেও একটা বিশ্বাসযোগ্য উপস্থিতি গড়ে তোলে।',
    null,
    '10000000-0000-4000-8000-000000000002',
    true,
    now() - interval '3 days'
  ),
  (
    'building-products-with-nextjs-and-supabase',
    'Next.js ও Supabase দিয়ে Modern Product তৈরি',
    'SSR, authentication এবং database একসঙ্গে ব্যবহার করে production-ready web app তৈরির ধারণা।',
    '# কেন Next.js আর Supabase

এই ওয়েবসাইটটাই আসলে Next.js আর Supabase দিয়ে বানানো, তাই এই লেখাটা কোনো তাত্ত্বিক আলোচনা না, বরং সরাসরি experience থেকে। যখন একটা নতুন product শুরু করি—ধরুন একটা learning platform, একটা admin panel-সহ blog, বা কোনো community feature—সবচেয়ে বড় প্রশ্ন হলো: backend, database, auth—এই সবকিছু আলাদা আলাদা সার্ভিস দিয়ে বানাব, নাকি এমন কিছু বেছে নেব যেখানে বেশিরভাগ কাজ একসাথে হয়ে যায়।

Next.js আর Supabase-এর সমন্বয় সেই দ্বিতীয় পথটাই সহজ করে দেয়। একটা ছোট বা মাঝারি team, এমনকি একজন solo developer-ও, খুব দ্রুত একটা production-ready product দাঁড় করাতে পারেন—database, authentication, file storage, আর real-time feature সব একই জায়গায় পেয়ে।

## App Router আর Server Actions

Next.js-এর App Router আসার পর সবচেয়ে বড় যে পরিবর্তন হয়েছে, তা হলো Server Component আর Server Action। আগে একটা form submit করতে হলে আলাদা API route বানাতে হতো, client-side এ fetch call লিখতে হতো, loading state manage করতে হতো। এখন একটা ফাংশনে `"use server"` লিখে দিলেই সেটা সরাসরি form-এর `action` হিসেবে ব্যবহার করা যায়।

এই সাইটের admin panel-এ blog post publish করা, contact message-এর reply পাঠানো, বা user-এর role পরিবর্তন করা—সবকিছুই server action দিয়ে করা। এতে আলাদা API layer লেখার দরকার পড়ে না, আর data সরাসরি server-এ থেকে database-এ যায়, client-এ কোনো sensitive logic exposed হয় না।

React-এর `useActionState` hook দিয়ে form-এর loading, error, success state manage করাও অনেক সহজ হয়ে গেছে। আলাদা state management library ছাড়াই একটা signup form বা contact form-এর pending/error/success flow পুরোপুরি handle করা যায়।

## Supabase: একই জায়গায় Auth, Database, RLS

Supabase মূলত Postgres-এর উপর বানানো, কিন্তু সাথে authentication, storage, আর সবচেয়ে গুরুত্বপূর্ণ—Row Level Security (RLS) নিয়ে আসে। RLS-এর মানে হলো, প্রতিটা table-এর জন্য policy লিখে দেওয়া যায় যে কোন user কোন row দেখতে পারবে বা পরিবর্তন করতে পারবে। এটা শুধু application code-এর উপর নির্ভর না করে, সরাসরি database level-এ security নিশ্চিত করে।

এই সাইটে user profile, contact message, scholarship request—সবকিছুর জন্যই আলাদা RLS policy আছে। একজন সাধারণ user শুধু নিজের data দেখতে পারবে, admin সব দেখতে পারবে—এই নিয়ম কোথাও frontend code-এ চেক করতে হয় না, database নিজেই সেটা নিশ্চিত করে।

## একটা real মিসটেক থেকে শেখা

RLS নিয়ে কাজ করতে গিয়ে একটা গুরুত্বপূর্ণ lesson পেয়েছিলাম। একবার user নিজের নাম edit করার feature যোগ করার সময়, একটা নতুন policy লিখেছিলাম যাতে user নিজের profile row update করতে পারে। কিন্তু ভুলে column-level permission-এ `role` column-ও রয়ে গিয়েছিল সেই grant-এর মধ্যে।

এর মানে দাঁড়াচ্ছিল, একজন সাধারণ user টেকনিক্যালি নিজের `role` পরিবর্তন করে নিজেকে admin বানিয়ে ফেলতে পারতেন। শুধু row-level policy ঠিক থাকলেই যথেষ্ট না, কোন column পর্যন্ত update করার permission দেওয়া হচ্ছে সেটাও আলাদাভাবে ভাবতে হয়। শেষমেশ `role` column-এর update permission সাধারণ user থেকে সরিয়ে নিয়ে, admin-এর role change করার জন্য একটা আলাদা secured database function বানাতে হয়েছিল যেটা নিজে থেকে permission verify করে।

এই ঘটনাটা মনে করিয়ে দেয়—RLS শক্তিশালী tool, কিন্তু "policy লিখে দিয়েছি মানেই secure" ধরে নেওয়াটা ভুল। প্রতিটা permission আলাদাভাবে যাচাই করা দরকার, বিশেষ করে যেখানে role বা privilege-related কোনো column জড়িত।

## Admin panel বানানোর practical pattern

একটা content-heavy site-এ admin panel অপরিহার্য। এই সাইটে যে pattern কাজে লেগেছে তা মোটামুটি এরকম: প্রতিটা admin route-এ ঢোকার আগে server-side এ session চেক করা হয়, user-এর role `admin` কিনা যাচাই করা হয়, তারপর data load হয়। এই চেক একটা shared helper function-এ রাখা আছে, যাতে প্রতিটা page-এ বারবার একই কোড লিখতে না হয়।

সব admin action—user role পরিবর্তন, blog publish/unpublish, message reply—আলাদা server action হিসেবে লেখা, আর প্রতিটাতেই আবার সেই admin-check হয়। এতে যদি কোনো ভাবে client-side check bypass হয়েও যায়, server-side এ ঠিকই আটকে যাবে।

## Performance আর Developer Experience

Next.js-এর Server Component ব্যবহার করলে অনেক data-fetching সরাসরি server-এ হয়ে যায়, client-এ কম JavaScript পাঠাতে হয়। এতে প্রথম page load দ্রুত হয়, বিশেষ করে content-heavy page-এ যেখানে অনেক database query লাগে।

Supabase-এর দিক থেকে, database migration file হিসেবে version control-এ রাখা যায়—প্রতিটা schema change একটা আলাদা SQL file, যা git history-তে দেখা যায় এবং প্রয়োজনে rollback করা যায়। এই habit-টা একা কাজ করলেও, এবং team-এ কাজ করলে আরও বেশি, খুব দরকারি।

## কাদের জন্য এই stack ভালো fit

যাঁরা দ্রুত একটা MVP বা product বানাতে চান, কিন্তু বড় infrastructure team নেই, তাঁদের জন্য এই combination বেশ কার্যকর। একটা learning platform, community site, বা internal tool—যেখানে auth, database, আর কিছু admin feature দরকার—এই ধরনের product-এর জন্য Next.js আর Supabase দিয়ে অনেক কম সময়ে একটা solid foundation দাঁড় করানো যায়।

তবে এটা সবকিছুর জন্য উপযুক্ত না। অনেক বেশি custom backend logic, বা খুব specific infrastructure control দরকার হলে, আলাদা backend service লেখা বেশি যুক্তিসঙ্গত হতে পারে।

## শুরু করার আগে যা মাথায় রাখা ভালো

নতুন কেউ এই stack দিয়ে শুরু করতে চাইলে, প্রথমেই RLS policy নিয়ে সময় নিয়ে ভাবা উচিত—শুধু "কাজ করছে" দেখলেই যথেষ্ট না, প্রতিটা table-এর জন্য কে কী করতে পারবে সেটা স্পষ্টভাবে লিখে রাখা উচিত। Server action-গুলোতে সবসময় server-side এ permission চেক রাখা উচিত, client-side validation-কে কখনো একমাত্র নিরাপত্তা হিসেবে ধরা ঠিক না। আর migration file-গুলো ছোট ছোট রাখা ভালো, যাতে কোনো সমস্যা হলে easily ট্র্যাক করা যায় কোন change-টা কারণ।

এই জিনিসগুলো মেনে চললে, Next.js আর Supabase দিয়ে সত্যিই দ্রুত এবং নির্ভরযোগ্যভাবে একটা modern product দাঁড় করানো সম্ভব।',
    null,
    '10000000-0000-4000-8000-000000000003',
    true,
    now()
  )
on conflict (slug) do update
set
  title = excluded.title,
  excerpt = excluded.excerpt,
  content = excluded.content,
  cover_image = excluded.cover_image,
  author_id = excluded.author_id,
  published = excluded.published,
  published_at = excluded.published_at,
  updated_at = now();

update public.posts
set is_featured = true
where slug = 'bangladesh-to-japan-career-journey';

commit;

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
    'বাংলাদেশ থেকে জাপানে এসে technology career তৈরি করা শুধু technical skill-এর বিষয় নয়। নতুন culture বোঝা, নিয়মিত শেখা এবং মানুষের সঙ্গে পরিষ্কারভাবে communicate করাও সমান গুরুত্বপূর্ণ।

প্রতিদিনের ছোট improvement দীর্ঘ সময়ে বড় পরিবর্তন তৈরি করে। কাজের পাশাপাশি নিজের experience document করা এবং community-এর সঙ্গে share করা personal brand তৈরির একটি শক্তিশালী উপায়।',
    null,
    '10000000-0000-4000-8000-000000000001',
    true,
    now() - interval '7 days'
  ),
  (
    'personal-branding-for-bangladeshi-professionals',
    'বাংলাদেশি Professionals-দের জন্য Personal Branding',
    'নিজের কাজ, দক্ষতা এবং গল্প online-এ বিশ্বাসযোগ্যভাবে তুলে ধরার practical guide।',
    'Personal branding মানে নিজেকে celebrity হিসেবে দেখানো নয়। আপনি কী জানেন, কীভাবে কাজ করেন এবং অন্যদের কী value দিতে পারেন—সেটি ধারাবাহিকভাবে প্রকাশ করাই personal branding।

একটি পরিষ্কার website, useful লেখা এবং real project-এর evidence মানুষকে আপনার expertise বুঝতে সাহায্য করে।',
    null,
    '10000000-0000-4000-8000-000000000002',
    true,
    now() - interval '3 days'
  ),
  (
    'building-products-with-nextjs-and-supabase',
    'Next.js ও Supabase দিয়ে Modern Product তৈরি',
    'SSR, authentication এবং database একসঙ্গে ব্যবহার করে production-ready web app তৈরির ধারণা।',
    'Next.js server-side rendering search engine এবং user experience—দুই দিকেই সুবিধা দেয়। Supabase authentication, PostgreSQL database এবং row-level security এক জায়গায় এনে application development দ্রুত করে।

Production app তৈরির সময় environment variables নিরাপদ রাখা, database policy পরীক্ষা করা এবং repeatable migration ব্যবহার করা জরুরি।',
    null,
    '10000000-0000-4000-8000-000000000003',
    false,
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

commit;

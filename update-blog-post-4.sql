update public.posts
set content = '# কেন Next.js আর Supabase

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
    updated_at = now()
where slug = 'building-products-with-nextjs-and-supabase';

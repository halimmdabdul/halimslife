import "server-only";

import { cache } from "react";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  published_at: string;
  created_at: string;
};

export const getPublishedPosts = cache(async (): Promise<BlogPost[]> => {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("posts")
    .select(
      "id,slug,title,excerpt,content,cover_image,meta_title,meta_description,published_at,created_at",
    )
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    return [];
  }

  return (data ?? []) as BlogPost[];
});

export const getPublishedPost = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const supabase = await createServerSupabaseClient();

    if (!supabase) {
      return null;
    }

    const { data, error } = await supabase
      .from("posts")
      .select(
        "id,slug,title,excerpt,content,cover_image,meta_title,meta_description,published_at,created_at",
      )
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error) {
      return null;
    }

    return data as BlogPost;
  },
);

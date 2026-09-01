"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  loginUser,
  signupUser,
  type PublicAuthState,
} from "@/app/auth-actions";
import {
  TranslatedText,
  useSitePreferences,
} from "@/components/site-preferences";

const initialState: PublicAuthState = {};

export function PublicAuthForm({
  mode,
  redirectTo,
}: {
  mode: "login" | "signup";
  redirectTo?: string;
}) {
  const { language } = useSitePreferences();
  const action = mode === "login" ? loginUser : signupUser;
  const [state, formAction, pending] = useActionState(action, initialState);
  const switchHref = `${mode === "login" ? "/signup" : "/login"}${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`;

  return (
    <form action={formAction} className="public-auth-form">
      {redirectTo ? <input type="hidden" name="redirectTo" value={redirectTo} /> : null}
      {mode === "signup" ? (
        <div>
          <label htmlFor="fullName">
            <TranslatedText bn="পুরো নাম" en="Full name" ja="氏名" />
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder={
              language === "bn"
                ? "আপনার নাম"
                : language === "en"
                  ? "Your name"
                  : "お名前"
            }
            minLength={2}
            required
          />
        </div>
      ) : null}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          placeholder="••••••••"
          minLength={mode === "login" ? 6 : 8}
          required
        />
      </div>
      {state.error ? <p className="public-auth-error">{state.error}</p> : null}
      {state.success ? (
        <p className="public-auth-success">{state.success}</p>
      ) : null}
      <button type="submit" disabled={pending}>
        {pending ? (
          <TranslatedText
            bn="অপেক্ষা করুন..."
            en="Please wait..."
            ja="お待ちください..."
          />
        ) : mode === "login" ? (
          <TranslatedText bn="Login করুন" en="Login" ja="ログイン" />
        ) : (
          <TranslatedText
            bn="Account তৈরি করুন"
            en="Create account"
            ja="アカウント作成"
          />
        )}
      </button>
      <p className="public-auth-switch">
        {mode === "login" ? (
          <TranslatedText
            bn="নতুন account প্রয়োজন?"
            en="Need an account?"
            ja="アカウントをお持ちでないですか？"
          />
        ) : (
          <TranslatedText
            bn="আগেই account আছে?"
            en="Already have an account?"
            ja="すでにアカウントをお持ちですか？"
          />
        )}{" "}
        <Link href={switchHref}>
          {mode === "login" ? "Sign up" : "Login"}
        </Link>
      </p>
    </form>
  );
}

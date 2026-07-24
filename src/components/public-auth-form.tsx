"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  loginUser,
  signupUser,
  type PublicAuthState,
} from "@/app/auth-actions";

const initialState: PublicAuthState = {};

export function PublicAuthForm({ mode }: { mode: "login" | "signup" }) {
  const action = mode === "login" ? loginUser : signupUser;
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="public-auth-form">
      {mode === "signup" ? (
        <div>
          <label htmlFor="fullName">পুরো নাম</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="আপনার নাম"
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
        {pending
          ? "অপেক্ষা করুন..."
          : mode === "login"
            ? "Login করুন"
            : "Account তৈরি করুন"}
      </button>
      <p className="public-auth-switch">
        {mode === "login" ? "নতুন account প্রয়োজন?" : "আগেই account আছে?"}{" "}
        <Link href={mode === "login" ? "/signup" : "/login"}>
          {mode === "login" ? "Sign up" : "Login"}
        </Link>
      </p>
    </form>
  );
}

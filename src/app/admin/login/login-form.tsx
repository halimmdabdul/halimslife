"use client";

import { useActionState } from "react";

import { loginAdmin, type LoginState } from "@/app/admin/actions";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAdmin,
    initialState,
  );

  return (
    <form action={formAction} className="admin-login-form">
      <div>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="admin@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          minLength={6}
          required
        />
      </div>
      {state.error ? <p className="admin-form-error">{state.error}</p> : null}
      <button type="submit" disabled={pending}>
        {pending ? "যাচাই হচ্ছে..." : "Admin login"}
      </button>
    </form>
  );
}

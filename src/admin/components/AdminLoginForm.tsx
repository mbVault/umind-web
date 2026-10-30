"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UmindLogo } from "@/components/brand/UmindLogo";
import { useAdminAuth } from "../auth/AdminAuthProvider";
import { ADMIN_ROUTES } from "../lib/config";
import { StaffApiError } from "../lib/staffApi";

export function AdminLoginForm() {
  const { signInWithPassword, me, ready } = useAdminAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextPath = (() => {
    const raw = searchParams.get("next");
    if (!raw || !raw.startsWith("/admin")) return ADMIN_ROUTES.root;
    return raw;
  })();

  useEffect(() => {
    if (ready && me) {
      router.replace(nextPath);
    }
  }, [ready, me, nextPath, router]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (!email.trim() || !password) {
        throw new StaffApiError(400, "Enter your work email and password.");
      }
      await signInWithPassword(email, password);
      router.replace(nextPath);
    } catch (err) {
      setError(
        err instanceof StaffApiError
          ? err.message
          : "Sign-in failed. Check that the API and SuperTokens Core are running.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login">
      <div className="admin-login__panel">
        <div className="admin-login__brand">
          <UmindLogo size={40} />
          <div>
            <p className="admin-login__eyebrow">U Mind</p>
            <h1 className="admin-login__title">Admin sign in</h1>
          </div>
        </div>

        <p className="admin-login__lede">
          Staff access only. There is no public signup — your account must already
          be provisioned with an admin membership.
        </p>

        <form className="admin-login__form" onSubmit={onSubmit} noValidate>
          <label className="admin-field">
            <span className="admin-field__label">Work email</span>
            <input
              className="admin-field__input"
              type="email"
              name="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </label>

          <label className="admin-field">
            <span className="admin-field__label">Password</span>
            <div className="admin-field__password">
              <input
                className="admin-field__input"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                className="admin-field__toggle"
                onClick={() => setShowPassword((v) => !v)}
                disabled={loading}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {error ? (
            <p className="admin-login__error" role="alert">
              {error}
            </p>
          ) : null}

          <button className="u-btn u-btn--primary" type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

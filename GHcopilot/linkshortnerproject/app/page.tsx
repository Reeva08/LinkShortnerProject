"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-lg font-bold text-cyan-300">
            S
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">Shortly</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isLoaded ? null : !isSignedIn ? (
            <SignInButton mode="modal">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Sign in
              </Button>
            </SignInButton>
          ) : (
            <UserButton />
          )}
        </div>
      </header>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            secure link sharing
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Turn long URLs into short, memorable links.
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Built with a protected dashboard and Clerk authentication so you can share and manage your links with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {!isLoaded ? null : !isSignedIn ? (
              <SignInButton mode="modal">
                <Button
                  size="lg"
                  className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Get started
                </Button>
              </SignInButton>
            ) : (
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Open dashboard
              </Link>
            )}
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View demo
            </Link>
          </div>

          {user && (
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
              Signed in as <span className="font-medium text-white">{user.emailAddresses[0]?.emailAddress}</span>
            </div>
          )}
        </div>

        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Stats</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">This week</h2>
            </div>
            <div className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
              +18.4%
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">Tracked links</p>
              <p className="mt-2 text-3xl font-semibold text-white">1,284</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">Clicks generated</p>
              <p className="mt-2 text-3xl font-semibold text-white">84.7K</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">Conversion rate</p>
              <p className="mt-2 text-3xl font-semibold text-white">6.9%</p>
            </div>
          </div>
        </div>
      </section>

      {isLoaded && isSignedIn && (
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div>
              <p className="text-sm text-slate-400">Profile</p>
              <p className="mt-1 font-medium text-white">{user?.firstName ?? "Team member"}</p>
            </div>
            <SignOutButton>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-red-400 hover:text-red-300"
              >
                Sign out
              </Button>
            </SignOutButton>
          </div>
        </div>
      )}
    </main>
  );
}

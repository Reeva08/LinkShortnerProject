import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <Suspense fallback={<div className="h-[620px] w-full max-w-md animate-pulse rounded-2xl bg-slate-800/80" />}>
        <SignUp />
      </Suspense>
    </div>
  );
}

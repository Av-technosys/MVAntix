import { Suspense } from "react";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-6 py-16">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}

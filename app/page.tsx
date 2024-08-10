import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 bg-teal-100 dark:bg-teal-900">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl md:text-6xl text-zinc-800 dark:text-zinc-100 font-semibold">
          Advance Authentication Toolkit
        </h1>
        <p className="text-zinc-800 dark:text-zinc-100">
          All I need for authentication.
        </p>
        <div>
          <LoginButton>
            <Button>Gain Access</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

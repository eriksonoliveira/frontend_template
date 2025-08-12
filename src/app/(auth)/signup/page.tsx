import Link from "next/link";

import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/logo";

export default function Page() {
  return (
    <div className="max-w-lg mx-auto mt-12 px-6">
      <Logo size={56} />
      <h1 className="mt-10 text-2xl">Create your account</h1>
      <div className="mt-10 mb-14 flex flex-col gap-6">
        <SignupForm />
      </div>
      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <div className="text-gray-500">Already a member?</div>
        <Link href="/signin" className="hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}

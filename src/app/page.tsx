import { Logo } from "@/components/logo";
import { redirect } from "next/navigation";

function Page() {
  redirect("/home");
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo size={80} />
    </div>
  );
}

export default Page;

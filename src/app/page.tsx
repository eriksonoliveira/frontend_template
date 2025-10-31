import { auth0 } from "@/lib/auth0";

import { redirect } from "next/navigation";

export default auth0.withPageAuthRequired(
  function Page() {
    redirect("/home");
  },
  { returnTo: "/" }
);

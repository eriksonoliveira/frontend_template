import { redirect } from "next/navigation";

// TODO remove mock user
import { user } from "@/data/user";

const Page = () => {
  redirect("/" + user.slug);

  return null;
};

export default Page;

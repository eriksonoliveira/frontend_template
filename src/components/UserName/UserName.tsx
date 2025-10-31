"use client";

import { useUser } from "@auth0/nextjs-auth0";

const UserName = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return "";
  }

  console.log("User", user);

  return (
    <div className="inline font-bold">{(user && user.name) || "user"}</div>
  );
};

export { UserName };

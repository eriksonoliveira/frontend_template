"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const NavLogout = () => {
  const router = useRouter();
  const logout = () => {
    router.replace("/auth/logout");
  };

  return (
    <div
      onClick={logout}
      className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100`}
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6" />
      <div className="text-lg">Sign out</div>
    </div>
  );
};

export { NavLogout };

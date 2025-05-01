import { user } from "@/data/user";
import Image from "next/image";
import Link from "next/link";

const NavMyProfile = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <Image
            src={user.avatar}
            alt="profile picture"
            className="size-full"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`${user.slug}`} className="block truncate">
          {user.name}
        </Link>
        <div className="text-sm text-gray-400 truncate">@{user.slug}</div>
      </div>
    </div>
  );
};

export { NavMyProfile };

import Image from "next/image";
import Link from "next/link";

// TODO remove mock data
import { user } from "@/data/user";
import { UserName } from "../UserName/UserName";

const NavMyProfile = () => {
  return (
    <div className="flex flex-row items-center">
      <Link href={`/${user.slug}`}>
        <Image
          src={user.avatar}
          alt="profile picture"
          className="size-10 mr-2 rounded-full overflow-hidden"
          width={40}
          height={40}
        />
      </Link>
      <div className="flex-1 overflow-hidden">
        <Link href={`${user.slug}`} className="block truncate">
          <UserName />
        </Link>
        <div className="text-sm text-gray-400 truncate">@{user.slug}</div>
      </div>
    </div>
  );
};

export { NavMyProfile };

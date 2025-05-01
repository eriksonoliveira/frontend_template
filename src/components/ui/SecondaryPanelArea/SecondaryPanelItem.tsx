"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Button, BUTTON_SIZE } from "../Button";
import { User } from "@/types/user";

type Props = {
  user: User;
};

/**
 * mock data
 */
const getFakeAvatarURL = (userName: string) => {
  const nameParam = userName.split(" ").join("+");
  return `https://ui-avatars.com/api/?name=${nameParam}&background=0D8ABC&color=fff&size=100`;
};

const TopicItem = (props: Props) => {
  const [following, setFollowing] = useState(false);
  const onButtonPressed = useCallback(() => {
    setFollowing(true);
  }, []);

  return (
    <div className="flex items-center flex-row">
      <div className="size-10 rounded-full overflow-hidden mr-2">
        <Link href={`/${props.user.slug}`} className="group/item">
          <Image
            src={getFakeAvatarURL(props.user.name)}
            alt=""
            className="size-full"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        {/* @ts-expect-error - mock data has username instead of slug */}
        <Link href={`/${props.user.username}`} className="block truncate">
          {props.user.name}
        </Link>
        <div className="truncate text-sm text-gray-400">
          {/* @ts-expect-error - mock data has username instead of slug */}
          @{props.user.username}
        </div>
      </div>
      <div className="w-20 pl-2">
        {following == false && (
          <Button
            label="Follow"
            size={BUTTON_SIZE.SMALL}
            onClick={onButtonPressed}
          />
        )}
      </div>
    </div>
  );
};

const TopicItemLoader = () => {
  return (
    <div className="flex flex-row items-center animate-pulse">
      <div className="size-10 rounded-full overflow-hidden bg-gray-600 mr-2"></div>
      <div className="flex-1 gap-1 flex flex-col">
        <div className="bg-gray-600 h-4 w-3/4"></div>
        <div className="bg-gray-600 h-4 w-1/4"></div>
      </div>
    </div>
  );
};

export { TopicItem, TopicItemLoader };

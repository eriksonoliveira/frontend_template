import Link from "next/link";
import Image from "next/image";

import { PostItemIcons } from "./PostItemIcons";

import type { Post } from "../../types/post";

type Props = {
  post: Post;
};

const PostItem = (props: Props) => {
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${props.post.author.slug}`}>
          <Image
            src={props.post.author.avatar}
            alt={props.post.author.name}
            className="size-10 rounded-full overflow-hidden"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="font-bold text-lg">
            <Link href={`/${props.post.author.slug}`}>
              {props.post.author.name}
            </Link>
          </div>
          <div className="text-xs text-gray-500">@{props.post.author.slug}</div>
          <div>date</div>
        </div>
        <div className="py-4 text-lg">{props.post.body}</div>
        {props.post.image && (
          <div className="w-full relative">
            <Image
              src={props.post.image}
              alt="Post image"
              className="w-full rounded-2xl"
              width={400}
              height={350}
            />
          </div>
        )}
        <PostItemIcons post={props.post} />
      </div>
    </div>
  );
};

export { PostItem };

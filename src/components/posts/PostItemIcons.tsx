"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { Post } from "@/types/post";

type Props = {
  post: Post;
};

const PostItemIcons = (props: Props) => {
  const [like, setLike] = useState({
    liked: props.post.liked,
    likes: props.post.likes,
  });

  const toggleLike = async () => {
    const prevLike = { liked: like.liked, likes: like.likes };
    // Optimistically update UI
    setLike({
      liked: !like.liked,
      likes: like.liked ? like.likes - 1 : like.likes + 1,
    });

    try {
      // Enable once connected to backend
      // const response = await fetch(`/api/posts/${props.post.id}/like`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     liked: like.liked,
      //   }),
      // });

      // if (!response.ok) {
      //   // Rollback UI if request fails
      //   setLike({ ...prevLike });
      // }
    } catch (error) {
      // Rollback UI if error occurrs
      setLike({ ...prevLike });

      console.warn("Could not set like for post. Error:", error);
    }
  };

  return (
    <div className="flex mt-6 text-gray-500 gap-4">
      <div className="flex-initial">
        <Link href={`/post/${props.post.id}`}>
          <div className="inline-flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faComment} className="size-6" />
            <div className="text-lg">{props.post.comments}</div>
          </div>
        </Link>
      </div>
      <div className="flex-initial">
        <div
          className="inline-flex items-center gap-2 cursor-pointer"
          onClick={toggleLike}
        >
          <FontAwesomeIcon
            icon={like.liked ? faHeartSolid : faHeart}
            className="size-6"
          />
          <div className="text-lg">{like.likes}</div>
        </div>
      </div>
    </div>
  );
};

export { PostItemIcons };

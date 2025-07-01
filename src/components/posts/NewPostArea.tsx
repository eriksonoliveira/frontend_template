"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

import { user } from "@/data/user";
import { Button, BUTTON_SIZE } from "../ui/Button";

const NewPostArea = () => {
  const textAreaRef = React.useRef<HTMLDivElement>(null);

  const uploadImage = () => {
    // TODO: upload image
    console.log("upload image");
  };

  const createPost = () => {
    // TODO: create post
    console.log("create post");
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const content = (e.target as HTMLDivElement).textContent;
    const text = content?.trim() || "";
    const isTextContentEmpty = text.length == 0;

    // Move cursor to the beginning of the text area
    // if all text has been deleted
    if (isTextContentEmpty && textAreaRef.current) {
      textAreaRef.current.innerHTML = "";
      textAreaRef.current.focus();
    }
  };

  return (
    <div className="flex flex-row gap-6 px-8 py-6 border-b-2 border-gray-900">
      <Image
        src={user.avatar}
        alt="profile picture"
        className="size-12 rounded-full overflow-hidden"
        width={40}
        height={40}
      />
      <div className="flex-1">
        <div
          className={`min-h-14 outline-none text-lg text-white empty:before:content-['Create_new_post'] empty:before:text-gray-500`}
          contentEditable
          role="textbox"
          ref={textAreaRef}
          onInput={handleInput}
          autoFocus={false}
        ></div>
        <div className="flex flex-row justify-between items-center mt-2">
          <div className="cursor-pointer" onClick={uploadImage}>
            <FontAwesomeIcon icon={faImage} className="size-6" />
          </div>
          <div className="w-28">
            <Button
              size={BUTTON_SIZE.SMALL}
              label="Post"
              onClick={createPost}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { NewPostArea };

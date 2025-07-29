import { User } from "./user";

export type Post = {
  id: string;
  body: string;
  likes: number;
  comments: number;
  liked: boolean;
  shahared: boolean;
  image?: string;
  createdAt: Date;
  author: User;
};

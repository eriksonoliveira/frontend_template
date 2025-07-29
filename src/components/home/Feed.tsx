import { getMockPosts } from "@/data/mockPost";
import { PostItem } from "@/components/posts/PostItem";

const Feed = async () => {
  /* get mock data */
  const posts = await getMockPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export { Feed };

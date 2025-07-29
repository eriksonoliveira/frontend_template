import type { Post } from "@/types/post";

const mockPosts: Post[] = [
  {
    id: "1",
    body: "For lasting energy, start your mornings with light cardio and a balanced breakfast. Remember, building healthy habits is about consistency, not perfection.",
    likes: 10,
    comments: 5,
    liked: false,
    shahared: false,
    image: "https://img.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg",
    createdAt: new Date(),
    author: {
      slug: "erikson",
      name: "Erikson Oliveira",
      avatar:
        "https://ui-avatars.com/api/?name=Erikson+Oliveira&background=0D8ABC&color=fff&size=100",
      cover:
        "https://img.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg",
    },
  },
  {
    id: "2",
    body: "Hydration and stretching are essential after any workout. Make these part of your daily routine to improve recovery and overall well-being. Small steps lead to big results!",
    likes: 20,
    comments: 2,
    liked: true,
    shahared: false,
    image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    createdAt: new Date(),
    author: {
      slug: "erikson",
      name: "Erikson Oliveira",
      avatar:
        "https://ui-avatars.com/api/?name=Erikson+Oliveira&background=0D8ABC&color=fff&size=100",
      cover:
        "https://img.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg",
    },
  },
];

const getMockPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPosts);
    }, 1000);
  });
};

export { getMockPosts };

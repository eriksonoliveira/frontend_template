import { TopicItem } from "./TopicItem";

/**
 * Fetch mock data
 */
type Topic = {
  id: number;
  title: string;
};

const fetchRecentTopics = async () => {
  const data = await fetch(`${process.env.BASE_URL}posts`, {
    cache: "no-store",
  });
  const topics: Topic[] = await data.json();
  // Remove: force delay in response to show Suspense fallback
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
  return topics.slice(0, 4);
};

const RecentTopicsContent = async () => {
  const topics = await fetchRecentTopics();

  return (
    <>
      {topics.map((item) => {
        return (
          <TopicItem
            key={item.id}
            label={`#${item.title.split(" ")[0]}`}
            count={item.id}
          />
        );
      })}
    </>
  );
};

export { RecentTopicsContent };

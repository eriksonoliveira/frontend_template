import { TopicItem, TopicItemLoader } from "./TopicItem";

/**
 * Fetch mock data
 */
type Topic = {
  id: number;
  title: string;
};

const fetchRecentTopics = async () => {
  const data = await fetch(`${process.env.BASE_URL}posts`);
  const topics: Topic[] = await data.json();
  return topics.slice(0, 4);
};

const RecentTopicsContainer = async () => {
  const topics = await fetchRecentTopics();

  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">{"What's happening"}</h2>
      <div className="flex flex-col p-6 pt-0 gap-4">
        {topics.map((item) => {
          return (
            <TopicItem
              key={item.id}
              label={`#${item.title.split(" ")[0]}`}
              count={item.id}
            />
          );
        })}
        <TopicItemLoader />
      </div>
    </div>
  );
};

export { RecentTopicsContainer };
export const dynamic = "force-dynamic";

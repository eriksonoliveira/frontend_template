import { TopicItem } from "./TopicItem";
import { fetchData } from "@/data/fetchMockData";

type Topic = {
  id: number;
  title: string;
};

const RecentTopicsContent = async () => {
  /**
   * Fetch mock data
   */
  const topics = await fetchData<Topic>("posts", 4);

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

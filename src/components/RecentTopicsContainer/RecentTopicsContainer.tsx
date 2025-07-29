// import { TopicItem, TopicItemLoader } from "./TopicItem";

// /**
//  * Fetch mock data
//  */
// type Topic = {
//   id: number;
//   title: string;
// };

// const fetchRecentTopics = async () => {
//   const data = await fetch(`${process.env.BASE_URL}posts`, {
//     cache: "no-store",
//   });
//   const topics: Topic[] = await data.json();
//   return topics.slice(0, 4);
// };

import { Suspense } from "react";
import { RecentTopicsContent } from "./RecentTopicsContent";
import { ContentFallback } from "./ContentFallback";

const RecentTopicsContainer = async () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">{"What's happening"}</h2>
      <div className="flex flex-col p-6 pt-0 gap-4">
        <Suspense fallback={<ContentFallback />}>
          <RecentTopicsContent />
        </Suspense>
      </div>
    </div>
  );
};

export { RecentTopicsContainer };

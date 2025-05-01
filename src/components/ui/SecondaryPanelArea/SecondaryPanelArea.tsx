import { User } from "@/types/user";
import { TopicItem, TopicItemLoader } from "./SecondaryPanelItem";

/**
 * Fetch mock data
 */
const fetchUsers = async () => {
  const data = await fetch(`${process.env.BASE_URL}users`);
  const users: User[] = await data.json();
  return users.slice(0, 3);
};

const SecondaryPanelArea = async () => {
  const users = await fetchUsers();

  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">{"What's happening"}</h2>
      <div className="flex flex-col p-6 pt-0 gap-4">
        {users.map((item) => {
          return (
            <TopicItem
              // key={item.slug}
              // @ts-expect-error - mock data has username instead of slug
              key={item.username}
              user={item}
            />
          );
        })}
        <TopicItemLoader />
      </div>
    </div>
  );
};

export { SecondaryPanelArea };
export const dynamic = "force-dynamic";

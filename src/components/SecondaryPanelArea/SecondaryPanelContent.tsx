import { User } from "@/types/user";
import { UserItem } from "./SecondaryPanelItem";
import { fetchData } from "@/data/fetchMockData";

const SecondaryPanelContent = async () => {
  /**
   * Fetch mock data
   */
  const users = await fetchData<User>("users", 3);
  return (
    <>
      {users.map((item) => {
        return (
          <UserItem
            // key={item.slug}
            // @ts-expect-error - mock data has username instead of slug
            key={item.username}
            user={item}
          />
        );
      })}
    </>
  );
};

export { SecondaryPanelContent };

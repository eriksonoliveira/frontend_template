import { User } from "@/types/user";
import { UserItem } from "./SecondaryPanelItem";

/**
 * Fetch mock data
 */
const fetchUsers = async () => {
  const data = await fetch(`${process.env.BASE_URL}users`, {
    cache: "no-store",
  });
  const users: User[] = await data.json();
  // Remove: force delay in response to show Suspense fallback
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
  return users.slice(0, 3);
};

const SecondaryPanelContent = async () => {
  const users = await fetchUsers();
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

/**
 * Fetch mock data
 */

const fetchData = async <T>(type: string, limit: number) => {
  const data = await fetch(`${process.env.BASE_URL}${type}`, {
    cache: "no-store",
  });
  const topics: T[] = await data.json();
  // Remove: force delay in response to show Suspense fallback
  await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
  return topics.slice(0, limit);
};

export { fetchData };

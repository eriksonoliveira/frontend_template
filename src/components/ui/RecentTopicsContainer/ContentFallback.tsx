const TopicItemLoader = () => {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="bg-gray-600 h-4 w-3/4"></div>
      <div className="bg-gray-600 h-4 w-1/4"></div>
    </div>
  );
};

const ContentFallback = () => {
  return (
    <>
      <TopicItemLoader />
      <TopicItemLoader />
      <TopicItemLoader />
      <TopicItemLoader />
    </>
  );
};

export { ContentFallback };

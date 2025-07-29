const UsertemLoader = () => {
  return (
    <div className="flex flex-row items-center animate-pulse">
      <div className="size-10 rounded-full overflow-hidden bg-gray-600 mr-2"></div>
      <div className="flex-1 gap-1 flex flex-col">
        <div className="bg-gray-600 h-4 w-3/4"></div>
        <div className="bg-gray-600 h-4 w-1/4"></div>
      </div>
    </div>
  );
};
const ContentFallback = () => {
  return (
    <>
      <UsertemLoader />
      <UsertemLoader />
      <UsertemLoader />
      <UsertemLoader />
    </>
  );
};

export { ContentFallback };

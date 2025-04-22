import Link from "next/link";

type Props = {
  label: string;
  count: number;
};

const TopicItem = (props: Props) => {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(props.label)}`}
      className="group/item"
    >
      <div className="group-hover/item:underline font-bold">{props.label}</div>
      <div className="text-sm text-gray-400">{`${props.count} posts`}</div>
    </Link>
  );
};

const TopicItemLoader = () => {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="bg-gray-600 h-4 w-3/4"></div>
      <div className="bg-gray-600 h-4 w-1/4"></div>
    </div>
  );
};

export { TopicItem, TopicItemLoader };

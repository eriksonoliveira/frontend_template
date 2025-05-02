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


export { TopicItem };

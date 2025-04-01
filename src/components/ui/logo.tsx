import Image from "next/image";
import Link from "next/link";

type Props = {
  size: number;
};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt="z" width={props.size} height={props.size} />
    </Link>
  );
};

export { Logo };

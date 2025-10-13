import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  prevPage: string;
};

const Header = (props: Props) => {
  return (
    <header>
      <Link href={"/" + props.prevPage} className="">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div>{props.children}</div>
    </header>
  );
};

export { Header };

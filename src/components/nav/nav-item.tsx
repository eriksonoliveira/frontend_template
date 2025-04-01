"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
};

const NavItem = (props: Props) => {
  const pathName = usePathname();
  const isCurrentPage = pathName == props.href;

  return (
    <Link
      href={props.href}
      className={`flex items-center gap-6 py-3 ${
        props.active || isCurrentPage ? 'opacity-100' : 'opacity-70'
      } hover:opacity-100`}
    >
      <FontAwesomeIcon icon={props.icon} className="size-6" />
      <div className="text-lg">{props.label}</div>
    </Link>
  );
};

export { NavItem };

"use client";

import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./Input";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  defaultValue?: string;
  toggleVisibility?: boolean;
};

const searchPath = "/search";

const SearchField = (props: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState(props.defaultValue ?? "");

  const handleEnterKey = () => {
    if (searchValue) {
      router.push(`${searchPath}?q=${encodeURIComponent(searchValue)}`);
    }
  };

  if (pathName == searchPath && props.toggleVisibility) {
    return null;
  }

  return (
    <Input
      placeholder="Search"
      value={searchValue}
      onChange={setSearchValue}
      icon={faMagnifyingGlass}
      filled
      onEnter={handleEnterKey}
    />
  );
};

export { SearchField };

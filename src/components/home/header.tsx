"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "../ui/logo";
import { Menu } from "./menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const expandMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className="flex justify-between p-6 border-b-2 border-gray-900">
      <div className="lg:hidden">
        <Logo size={24} />
      </div>
      <div className="hidden lg:block text-2xl">Messages</div>
      <div className="lg:hidden cursor-pointer" onClick={expandMenu}>
        <FontAwesomeIcon icon={faBars} className="size-6" />
      </div>

      {
        isMenuOpen && (
          <Menu setIsMenuOpen={setIsMenuOpen} />
        )
      }
    </div>
  );
};

export { Header };

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { HamburgerMenu } from "./HamburgerMenu";
import { Logo } from "@components/Logo";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-20 lg:h-24">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <Logo />
          <span className="font-bold text-lg">`krishna`</span>
        </div>
      </Link>
      <NavLinks />
      <HamburgerMenu />
    </nav>
  );
};

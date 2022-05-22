import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { HamburgerMenu } from "./HamburgerMenu";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-20 lg:h-24">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <Image src="/images/logo.svg" alt="Logo" width={35} height={35} />
          <span className="font-bold text-lg">`krishna`</span>
        </div>
      </Link>
      <NavLinks />
      <HamburgerMenu />
    </nav>
  );
};

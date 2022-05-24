import React from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "@components/Logo";

export const NavBar = () => {
  const [isOpen, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  return (
    <nav
      className={`flex justify-between items-center h-20 lg:h-24 ${
        isOpen ? "sticky top-0 z-50" : ""
      }`}
    >
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <Logo />
          <span className="font-bold text-lg">`krishna`</span>
        </div>
      </Link>
      <NavLinks />
      <MobileMenu toggleOpen={toggleOpen} isOpen={isOpen} />
    </nav>
  );
};

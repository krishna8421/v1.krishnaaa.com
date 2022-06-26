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
      className={`flex h-20 items-center justify-between lg:h-24 ${
        isOpen ? "sticky top-0 z-50" : ""
      }`}
    >
      <Link href="/">
        <a>
          <div className="flex cursor-pointer select-none items-center gap-2">
            <Logo />
            <span className="text-lg font-bold">`krishna`</span>
          </div>
        </a>
      </Link>
      <NavLinks />
      <MobileMenu toggleOpen={toggleOpen} isOpen={isOpen} />
    </nav>
  );
};

import React from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const MobileMenu = ({ toggleOpen, isOpen }: Props) => {
  return (
    <div className="md:hidden">
      <Image
        src={`/images/${isOpen ? "hamburger-close" : "hamburger"}.svg`}
        alt={`${isOpen ? "Close Hamburger Icon" : "Hamburger Icon"}`}
        width={25}
        height={25}
        className="z-50 cursor-pointer select-none"
        onClick={toggleOpen}
      />
      {isOpen && (
        <div className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-12 bg-black">
          <NavLink noHide url="/" name="home" />
          <NavLink noHide url="/projects" name="projects" />
          <NavLink noHide url="/blogs" name="blogs" />
          <NavLink noHide url="/contact" name="contact" />
          <Image
            src="/images/hamburger-circle-close.svg"
            alt="Close Hamburger Icon"
            width={45}
            height={45}
            className="z-50 cursor-pointer select-none"
            onClick={toggleOpen}
          />
        </div>
      )}
    </div>
  );
};

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
        className="cursor-pointer z-50 select-none"
        onClick={toggleOpen}
      />
      {isOpen && (
        <div className="fixed z-40 bg-black w-screen h-screen inset-0 flex flex-col gap-12 justify-center items-center">
          <NavLink noHide url="/" name="home" />
          <NavLink noHide url="/projects" name="projects" />
          <NavLink noHide url="/blogs" name="blogs" />
          <NavLink noHide url="/repos" name="repos" />
          <NavLink noHide url="/logs" name="logs" />
          <NavLink noHide url="/contact" name="contact" />
          <Image
            src="/images/hamburger-circle-close.svg"
            alt="Close Hamburger Icon"
            width={45}
            height={45}
            className="cursor-pointer z-50 select-none"
            onClick={toggleOpen}
          />
        </div>
      )}
    </div>
  );
};

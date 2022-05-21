import React from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  return (
    <div className="md:hidden">
      <Image
        src={`/images/${isOpen ? "hamburger-close" : "hamburger"}.svg`}
        alt={`${isOpen ? "Close Hamburger Icon" : "Hamburger Icon"}`}
        width={25}
        height={25}
        className="cursor-pointer z-10 select-none"
        onClick={toggleOpen}
      />
      {isOpen && (
        <div className="absolute bg-black w-screen min-h-screen inset-0 flex flex-col gap-12 justify-center items-center -top-12">
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
            className="cursor-pointer z-10 select-none"
            onClick={toggleOpen}
          />
        </div>
      )}
    </div>
  );
};

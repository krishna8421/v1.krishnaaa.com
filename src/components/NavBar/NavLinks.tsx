import React from "react";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  return (
    <div className="flex gap-8">
      <NavLink url="/" name="home" />
      <NavLink url="/projects" name="projects" />
      <NavLink url="/blogs" name="blogs" />
      <NavLink url="/repos" name="repos" />
      <NavLink url="/logs" name="logs" />
      <NavLink url="/contact" name="contact" />
    </div>
  );
};

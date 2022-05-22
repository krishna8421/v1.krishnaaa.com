import React from "react";
import { FooterLink } from "./FooterLink";

export const FooterLinks = () => {
  return (
    <div className="flex gap-32 font-bold text-gray-300 text-sm justify-center">
      <div className="flex flex-col gap-8 items-center">
        <FooterLink url="/home" name="home" />
        <FooterLink url="/blogs" name="blogs" />
        <FooterLink url="/contact" name="contact" />
      </div>
      <div className="flex flex-col gap-8 items-center">
        <FooterLink url="/logs" name="logs" />
        <FooterLink url="/repos" name="repos" />
        <FooterLink url="/projects" name="projects" />
      </div>
    </div>
  );
};

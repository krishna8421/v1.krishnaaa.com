import React from "react";
import { FooterLink } from "./FooterLink";

export const FooterLinks = () => {
  return (
    <div className="flex justify-center gap-32 text-sm font-bold text-gray-300">
      <div className="flex flex-col items-center gap-8">
        <FooterLink url="/" name="home" />
        <FooterLink url="/blogs" name="blogs" />
        <FooterLink url="/contact" name="contact" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <FooterLink url="/logs" name="logs" />
        <FooterLink url="/repos" name="repos" />
        <FooterLink url="/projects" name="projects" />
      </div>
    </div>
  );
};

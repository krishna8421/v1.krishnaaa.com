import { Logo } from "@components/Logo";
import { SocialIcons } from "@components/SocialIcons";
import { NAME } from "@constants";
import React from "react";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="flex flex-col selection:text-gray-50 items-center md:justify-content text-gray-300 gap-4 md:gap-0 border-t-2 border-gray-700">
      <div className="flex flex-col md:flex-row justify-around gap-16 py-6 md:py-20 w-full">
        <div className="flex flex-col gap-4 justify-center">
          <div className="w-full flex justify-center">
            <Logo />
          </div>
          <span className="text-white text-sm font-bold w-fit m-auto">{NAME}</span>
          <SocialIcons />
        </div>
        <FooterLinks />
      </div>
      <div className="text-xs py-2 flex items-center">
        <span className="text-lg mr-2">&#169;</span> {new Date().getFullYear()} Krishna Kumar. All
        rights reserved.
      </div>
    </footer>
  );
};

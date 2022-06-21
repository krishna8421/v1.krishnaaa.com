import { Logo } from "@components/Logo";
import { SocialIcons } from "@components/SocialIcons";
import { NAME } from "@constants";
import React from "react";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="md:justify-content flex flex-col items-center gap-4 border-t-2 border-gray-700 text-gray-300 selection:text-gray-50 md:gap-0">
      <div className="flex w-full flex-col justify-around gap-16 py-6 md:flex-row md:py-20">
        <div className="mt-8 flex flex-col justify-center gap-4 md:mt-auto">
          <div className="flex w-full justify-center">
            <Logo />
          </div>
          <span className="m-auto w-fit text-sm font-bold text-white">{NAME}</span>
          <SocialIcons />
        </div>
        <FooterLinks />
      </div>
      <div className="flex items-center py-2 text-xs">
        <span className="mr-2 text-lg">&#169;</span> {new Date().getFullYear()} Krishna Kumar. All
        rights reserved.
      </div>
    </footer>
  );
};

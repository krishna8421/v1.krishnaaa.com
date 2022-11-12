import { isNavLinkActive } from "@utils/isNavLinkActive";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  url: string;
  name: string;
  noHide?: boolean;
  className?: string;
}

export const NavLink = ({ url, name, noHide, className }: Props) => {
  const router = useRouter();
  return (
    <Link href={url}>
      <div
        className={`${
          isNavLinkActive(router.asPath, url)
            ? "text-gray-50 underline decoration-custom-purple decoration-4 underline-offset-8"
            : "text-gray-400 hover:text-gray-300"
        } cursor-pointer transition-all ${noHide ? "" : "hidden"} md:inline-block ${className}`}
      >
        {name}
      </div>
    </Link>
  );
};

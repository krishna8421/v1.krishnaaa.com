import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  url: string;
  name: string;
  noHide?: boolean;
}

export const NavLink = ({ url, name, noHide }: Props) => {
  const router = useRouter();
  const isActive = router.asPath === url;
  return (
    <Link href={url}>
      <div
        className={`${
          isActive
            ? "underline decoration-4 decoration-custom-purple underline-offset-8 text-gray-50"
            : "text-gray-400 hover:text-gray-300"
        } cursor-pointer transition-all ${noHide ? "" : "hidden"} md:inline-block`}
      >
        {name}
      </div>
    </Link>
  );
};

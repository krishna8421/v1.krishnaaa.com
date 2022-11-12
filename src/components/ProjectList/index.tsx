import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  path: string;
}

export const ProjectList = ({ name, path }: Props) => {
  return (
    <Link href={`${path}`} passHref>
      <div className="my-16 flex cursor-pointer text-3xl font-bold  underline decoration-white decoration-4 underline-offset-4 transition-all duration-300 hover:translate-x-12 md:my-24 md:text-5xl">
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

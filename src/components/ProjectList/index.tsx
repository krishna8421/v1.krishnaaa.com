import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  slug: string;
}

export const ProjectList = ({ name, slug }: Props) => {
  return (
    <Link href={`${slug}`} passHref>
      <div className="flex my-16 md:my-24 cursor-pointer text-3xl  md:text-5xl font-bold underline underline-offset-4 decoration-white decoration-4 hover:translate-x-12 transition-all duration-300">
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

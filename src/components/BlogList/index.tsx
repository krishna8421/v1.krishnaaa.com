import Link from "next/link";
import React from "react";
import { BlogTag } from "@contentlayer/generated";
import Image from "next/image";
import Tags from "@components/Tag";

interface Props {
  title: string;
  path: string;
  image: string;
  tags: BlogTag[];
  publishedAt: string;
  readingTime: string;
  setSearch: (value: string) => void;
}
const IMAGE_HEIGHT = 250;

export const BlogList = ({
  title,
  path,
  image,
  tags,
  publishedAt,
  readingTime,
  setSearch,
}: Props) => {
  return (
    <div className="flex flex-col gap-6 px-2 py-6 sm:flex-row md:px-8">
      <Link href={`${path}`} passHref>
        <Image
          src={image}
          alt={title}
          width={IMAGE_HEIGHT}
          height={IMAGE_HEIGHT}
          className="cursor-pointer rounded-xl object-cover"
        />
      </Link>
      <div className="flex w-full flex-col justify-between py-4 px-2">
        <Link href={`${path}`} passHref>
          <h1 className="cursor-pointer text-2xl font-bold">{title}</h1>
        </Link>
        <div className="my-8 sm:mt-0">
          {tags.map((tag, index) => (
            <span onClick={() => setSearch(tag as unknown as string)} key={index}>
              <Tags name={tag} />
            </span>
          ))}
        </div>
        <div className="text-sm font-semibold text-gray-500">
          <span>{publishedAt}</span>
          <span className="mx-2">&bull;</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </div>
  );
};

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
}

export const BlogList = ({ title, path, image, tags, publishedAt, readingTime }: Props) => {
  return (
    <div className="flex flex-col gap-6 px-2 py-6 sm:flex-row md:px-8">
      <div className="flex w-full justify-center sm:w-auto">
        <Link href={`${path}`} passHref>
          <div className="relative h-[20rem] w-[20rem] sm:h-[10rem] sm:w-[10rem]">
            <Image
              src={image}
              alt={title}
              layout="fill"
              className="absolute cursor-pointer rounded-xl object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="flex w-full flex-col justify-between py-4 px-2">
        <Link href={`${path}`} passHref>
          <a>
            <h1 className="cursor-pointer text-2xl font-bold">{title}</h1>
          </a>
        </Link>
        <div className="my-8 sm:mt-0">
          {tags.map((tag, index) => (
            <Link href={`/blogs?search=${tag as unknown as string}`} key={index}>
              <a>
                <Tags name={tag} />
              </a>
            </Link>
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

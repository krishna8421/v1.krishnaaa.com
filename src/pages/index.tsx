import { HalfBgText } from "@components/HalfBgText";
import { SocialIcons } from "@components/SocialIcons";
import { Main } from "@layouts/Main";
import { NextPage } from "next";
import { useWindowWidth } from "@react-hook/window-size";
import { DistortedText } from "@components/DistortedText";
import { BlogList } from "@components/BlogList";
import { allBlogs, Blog } from "@contentlayer/generated";
import { useEffect, useState } from "react";
import { findRecentBlogs } from "@utils/findRecentBlogs";
import Link from "next/link";

const Index: NextPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([] as Blog[]);
  const [oneLine, setOneLine] = useState<boolean>(true);

  useEffect(() => {
    const recentBlogs = findRecentBlogs(allBlogs);
    setBlogs(recentBlogs);
  }, []);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth <= 650) {
      setOneLine(false);
    } else {
      setOneLine(true);
    }
  }, [windowWidth]);

  console.log(oneLine);

  return (
    <Main>
      <span className="mt-24 block text-xl text-gray-300">HI THERE! I&apos;M</span>
      <div className="w-fit">
        <div className="my-10 flex flex-wrap text-7xl font-bold">
          {oneLine ? (
            <div>
              <HalfBgText>
                <DistortedText text="K" />
                RISHNA&nbsp;
                <DistortedText text="K" />
                UMAR
              </HalfBgText>
            </div>
          ) : (
            <div>
              <HalfBgText>
                <DistortedText text="K" />
                RISHNA
              </HalfBgText>
              <HalfBgText>
                <DistortedText text="K" />
                UMAR
              </HalfBgText>
            </div>
          )}
        </div>
      </div>
      <span className="text-md block font-bold text-gray-300">
        A <span className="text-custom-green">Creative Full Stack Web Developer</span> based in
        INDIA 🇮🇳
      </span>
      <div className="my-20 flex w-fit flex-col items-center gap-8">
        <Link href="/contact">
          <a>
            <div className="w-fit cursor-pointer border-2 border-custom-green px-8 py-2 text-sm text-custom-green">
              Contact me!
            </div>
          </a>
        </Link>
        <div className="w-fit">
          <SocialIcons />
        </div>
      </div>
      <div>
        <h3 className="mb-8 font-bold">recent blogs</h3>
        {blogs.length === 0 ? (
          <p className="flex h-full w-full items-center justify-center">no recent blogs</p>
        ) : (
          blogs.map((blog: Blog, index: number) => (
            <BlogList
              key={index}
              title={blog.title}
              path={blog.path}
              image={blog.image}
              tags={blog.tags}
              publishedAt={blog.publishedAt}
              readingTime={blog.readingTime}
            />
          ))
        )}
      </div>
    </Main>
  );
};

export default Index;

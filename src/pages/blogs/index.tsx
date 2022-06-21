import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { BLOGS_DESCRIPTION, NAME } from "@constants";
import { BlogList } from "@components/BlogList";
import { allBlogs, Blog } from "@contentlayer/generated";

const Blogs: NextPage = () => {
  return (
    <Main title={`Blogs | ${NAME}`} description={BLOGS_DESCRIPTION}>
      <input
        type="text"
        className="mt-16 h-12 w-full rounded-md border border-gray-700 bg-neutral-800/50 px-4 drop-shadow-2xl backdrop-blur-xl placeholder:italic focus:border-gray-500 focus:outline-none"
        placeholder="Search..."
      />
      <div className="mt-16 divide-y divide-gray-700">
        {allBlogs.map((blog: Blog, index: number) => (
          <BlogList
            key={index}
            title={blog.title}
            path={blog.path}
            image={blog.image}
            tags={blog.tags}
            publishedAt={blog.publishedAt}
            readingTime={blog.readingTime}
          />
        ))}
      </div>
    </Main>
  );
};

export default Blogs;

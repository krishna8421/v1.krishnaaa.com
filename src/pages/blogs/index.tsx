import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { BLOGS_DESCRIPTION, NAME } from "@constants";
import { BlogList } from "@components/BlogList";
import { allBlogs, Blog } from "@contentlayer/generated";
import { useEffect, useState } from "react";

const Blogs: NextPage = () => {
  const [blogs, setBlogs] = useState(allBlogs);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
  };

  const handleFilter = (value: string) => {
    if (value === "" || value == null) {
      setBlogs(allBlogs);
    }
    const fBlogs = new Set<Blog>();
    allBlogs.filter((blog) => {
      if (blog.tags) {
        blog.tags.forEach((tag) => {
          if ((tag as unknown as string).toLowerCase().includes(value)) {
            fBlogs.add(blog);
          }
        });
      }
      if (blog.title.toLowerCase().includes(value)) {
        fBlogs.add(blog);
      }
    });
    setBlogs(Array.from(fBlogs));
  };

  useEffect(() => {
    handleFilter(search);
  }, [search]);

  return (
    <Main title={`Blogs | ${NAME}`} description={BLOGS_DESCRIPTION}>
      <input
        type="text"
        className="mt-16 h-12 w-full rounded-md border border-gray-700 bg-neutral-800/50 px-4 drop-shadow-2xl backdrop-blur-xl placeholder:italic focus:border-gray-500 focus:outline-none"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <div className="mt-16 divide-y divide-gray-700">
        {blogs.map((blog: Blog, index: number) => (
          <BlogList
            key={index}
            title={blog.title}
            path={blog.path}
            image={blog.image}
            tags={blog.tags}
            publishedAt={blog.publishedAt}
            readingTime={blog.readingTime}
            setSearch={setSearch}
          />
        ))}
      </div>
    </Main>
  );
};

export default Blogs;

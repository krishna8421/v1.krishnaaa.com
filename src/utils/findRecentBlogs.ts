import { compareDesc } from "date-fns";
import { Blog } from "@contentlayer/generated";

/**
 *
 * @description returns the 3 most recent blogs
 */
export const findRecentBlogs = (blogs: Blog[]) => {
  const sortedBlogs = blogs.sort((a, b) =>
    compareDesc(
      new Date(a.publishedAt.split("-").reverse().join("-")),
      new Date(b.publishedAt.split("-").reverse().join("-")),
    ),
  );

  return sortedBlogs.slice(0, 3);
};

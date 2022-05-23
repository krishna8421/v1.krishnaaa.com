import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { BLOGS_DESCRIPTION, NAME } from "@constants";

const Blogs: NextPage = () => {
  return (
    <Main title={`Blogs | ${NAME}`} description={BLOGS_DESCRIPTION}>
      Blogs
    </Main>
  );
};

export default Blogs;

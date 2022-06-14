import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { NAME } from "@constants";

const Blogs: NextPage = () => {
  return (
    <Main title={`GO | ${NAME}`} description="All my Golang Projects">
      Golang
    </Main>
  );
};

export default Blogs;

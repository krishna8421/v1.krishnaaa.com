import { Main } from "@layouts/Main";
import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <Main title="Page not found">
      <Link href="/">
        <a>Your are lost my child</a>
      </Link>
    </Main>
  );
};

export default NotFound;

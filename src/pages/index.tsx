import { Main } from "@layouts/Main";
import { NextPage } from "next";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <Main>
      <Link href="/test">
        <a>test</a>
      </Link>
    </Main>
  );
};

export default Index;

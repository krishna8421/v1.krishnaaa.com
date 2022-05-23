import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { REPOS_DESCRIPTION, NAME } from "@constants";

const Repos: NextPage = () => {
  return (
    <Main title={`Repos | ${NAME}`} description={REPOS_DESCRIPTION}>
      Repos
    </Main>
  );
};

export default Repos;

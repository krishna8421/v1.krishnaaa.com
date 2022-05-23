import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { LOGS_DESCRIPTION, NAME } from "@constants";

const Logs: NextPage = () => {
  return (
    <Main title={`Logs | ${NAME}`} description={LOGS_DESCRIPTION}>
      Logs
    </Main>
  );
};

export default Logs;

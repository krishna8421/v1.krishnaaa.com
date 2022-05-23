import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { CONTACT_DESCRIPTION, NAME } from "@constants";

const Contact: NextPage = () => {
  return (
    <Main title={`Contact | ${NAME}`} description={CONTACT_DESCRIPTION}>
      Contact
    </Main>
  );
};

export default Contact;

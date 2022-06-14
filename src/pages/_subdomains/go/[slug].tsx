import { useRouter } from "next/router";
import { Main } from "@layouts/Main";

const Go = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);

  return <Main>Lib: {slug}</Main>;
};

export default Go;

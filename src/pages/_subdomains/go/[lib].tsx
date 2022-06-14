import { useRouter } from "next/router";
import { Main } from "@layouts/Main";

const Go = () => {
  const router = useRouter();
  const { lib } = router.query;
  console.log(router);

  return <Main>Lib: {lib}</Main>;
};

export default Go;

import { LayerButton } from "@components/LayerButton";
import { Main } from "@layouts/Main";
import { NextPage } from "next";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();
  const goToHomePage = () => router.push("/");
  return (
    <Main title="Page not found">
      <div className="flex items-center flex-col font-PressStart2P">
        <span className="text-8xl my-12">404</span>
        <h3 className="md:text-2xl text-xl">page on vacation</h3>
        <LayerButton
          text="Back to Home"
          bgClass="my-12"
          buttonClass="py-3 px-6"
          onClick={goToHomePage}
        />
      </div>
    </Main>
  );
};

export default NotFound;

import { LayerButton } from "@components/LayerButton";
import { Main } from "@layouts/Main";
import { NextPage } from "next";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();
  const goToHomePage = () => router.push("/");
  return (
    <Main title="Page not found" description="Oops, this page doesn't exist">
      <div className="flex flex-col items-center font-PressStart2P">
        <span className="my-12 text-8xl">404</span>
        <h3 className="text-xl md:text-2xl">page on vacation</h3>
        <LayerButton bgClass="my-12" buttonClass="py-3 px-6" onClick={goToHomePage}>
          Back to Home
        </LayerButton>
      </div>
    </Main>
  );
};

export default NotFound;

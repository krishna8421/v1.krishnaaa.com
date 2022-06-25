import { HalfBgText } from "@components/HalfBgText";
import { SocialIcons } from "@components/SocialIcons";
import { Main } from "@layouts/Main";
import { NextPage } from "next";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import { DistortedText } from "@components/DistortedText";

const Index: NextPage = () => {
  const width = useWindowWidth();
  console.log(width);

  return (
    <Main>
      <span className="mt-24 block text-xl text-gray-300">HI THERE! I&apos;M</span>
      <div className="w-fit">
        <span className="my-10 flex flex-wrap text-7xl font-bold transition delay-150 ease-in-out">
          <span className={`${width < 650 ? "hidden" : ""}`}>
            <HalfBgText>
              <DistortedText text="K" />
              RISHNA&nbsp;
              <DistortedText text="K" />
              UMAR
            </HalfBgText>
          </span>
          <span className={`${width >= 650 ? "hidden" : ""}`}>
            <HalfBgText>
              <DistortedText text="K" />
              RISHNA
            </HalfBgText>
            <HalfBgText>
              <DistortedText text="K" />
              UMAR
            </HalfBgText>
          </span>
        </span>
      </div>
      <span className="text-md block font-bold text-gray-300">
        A <span className="text-custom-green">Creative Full Stack Web Developer</span> based in
        INDIA 🇮🇳
      </span>
      <div className="my-20 flex w-fit flex-col items-center gap-8">
        <Link href="/contact">
          <div className="w-fit cursor-pointer border-2 border-custom-green px-8 py-2 text-sm text-custom-green">
            Contact me!
          </div>
        </Link>
        <div className="w-fit">
          <SocialIcons />
        </div>
      </div>
    </Main>
  );
};

export default Index;

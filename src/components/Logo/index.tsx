import Image from "next/image";

export const Logo = () => {
  return <Image src="/images/logo.svg" alt="Logo" width={35} height={35} className="select-none" />;
};

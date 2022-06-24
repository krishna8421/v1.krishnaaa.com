import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-fit">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={35}
        height={35}
        className="w-fit select-none"
      />
    </div>
  );
};

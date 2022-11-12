import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-fit">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={45}
        height={45}
        className="h-10 w-10 select-none"
      />
    </div>
  );
};

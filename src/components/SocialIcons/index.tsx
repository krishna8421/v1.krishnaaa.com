import Image from "next/image";

export const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Image src="/images/email.svg" alt="Logo" width={25} height={25} />
      <Image src="/images/linkedin.svg" alt="Logo" width={25} height={25} />
      <Image src="/images/github.svg" alt="Logo" width={25} height={25} />
      <Image src="/images/twitter.svg" alt="Logo" width={25} height={25} />
    </div>
  );
};

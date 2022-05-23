import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "@constants";
import Image from "next/image";

export const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center">
      {/* <a href={`mailto:${EMAIL_ADDRESS}`}><Image src="/images/email.svg" alt="Logo" width={25} height={25} /></a>
      <a href={LINKEDIN_URL}><Image src="/images/linkedin.svg" alt="Logo" width={25} height={25} /></a>
      <a href={GITHUB_URL}><Image src="/images/github.svg" alt="Logo" width={25} height={25} /></a>
      <a href={TWITTER_URL}><Image src="/images/twitter.svg" alt="Logo" width={25} height={25} /></a> */}
      <EmailIcon w={25} h={25} href={`mailto:${EMAIL_ADDRESS}`} />
      <LinkedInIcon w={25} h={25} href={LINKEDIN_URL} />
      <GithubIcon w={25} h={25} href={GITHUB_URL} />
      <TwitterIcon w={25} h={25} href={TWITTER_URL} />
    </div>
  );
};

interface Props {
  h: number;
  w: number;
  href: string;
  className?: string;
}

export const GithubIcon = ({ h, w, href, className }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <Image src="/images/github.svg" alt="GithubIcon" width={h} height={w} className={className} />
    </a>
  );
};

export const TwitterIcon = ({ h, w, href, className }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <Image
        src="/images/twitter.svg"
        alt="TwitterIcon"
        width={h}
        height={w}
        className={className}
      />
    </a>
  );
};

export const LinkedInIcon = ({ h, w, href, className }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <Image
        src="/images/linkedin.svg"
        alt="LinkedInIcon"
        width={h}
        height={w}
        className={className}
      />
    </a>
  );
};

export const EmailIcon = ({ h, w, href, className }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <Image src="/images/email.svg" alt="EmailIcon" width={h} height={w} className={className} />
    </a>
  );
};

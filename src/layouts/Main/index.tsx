import { NAME, SITE_DESCRIPTION, SITE_URL, TWITTER_USERNAME, SITE_TITLE } from "@constants";
import { MetaData, PartialMetaData } from "@interfaces";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props extends PartialMetaData {
  children: ReactNode;
}

export const Main = ({ children, ...customMeta }: Props) => {
  const router = useRouter();
  const meta: MetaData = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}${router.pathname}`,
    name: NAME,
    image: `${SITE_URL}$/images/logo.png`,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${TWITTER_USERNAME}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta?.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      {children}
    </div>
  );
};

import { NAME, SITE_DESCRIPTION, SITE_URL, TWITTER_USERNAME, SITE_TITLE } from "@constants";
import { MetaData, PartialMetaData } from "@interfaces";
import { Footer } from "@components/Footer";
import { NavBar } from "@components/NavBar";
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
    url: `${SITE_URL}${router.asPath}`,
    name: NAME,
    image: `${SITE_URL}/images/logo.png`,
    type: "website",
    ...customMeta,
  };
  return (
    // "selection:bg-opacity-99" for background opacity in safari.
    // Safari doesn't support 100% opacity for selection color.
    <div className="text-gray-50 selection:bg-custom-purple selection:bg-opacity-99">
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
        <meta name="twitter:creator" content={`@${TWITTER_USERNAME}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta?.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <div className="max-w-4xl px-6 lg:px-0 transition-all duration-500 m-auto min-h-screen relative flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

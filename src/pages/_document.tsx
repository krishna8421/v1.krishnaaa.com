import { Head, Html, Main, NextScript } from "next/document";
import { SITE_DESCRIPTION } from "@constants/index";

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="theme-color" content="#6700EA" />
      <meta name="referrer" content={"strict-origin"} />
      <meta name="description" content={SITE_DESCRIPTION} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

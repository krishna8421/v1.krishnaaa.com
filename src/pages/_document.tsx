import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16" />
      <link rel="shortcut icon" type="image/png" href="/icons/favicon-24x24.png" sizes="24x24" />
      <link rel="shortcut icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32" />
      <link rel="shortcut icon" type="image/png" href="/icons/favicon-48x48.png" sizes="48x48" />
      <link rel="shortcut icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/icons/favicon-128x128.png"
        sizes="128x128"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/icons/favicon-196x196.png"
        sizes="196x196"
      />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-57x57.png" sizes="57x57" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-60x60.png" sizes="60x60" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-72x72.png" sizes="72x72" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-76x76.png" sizes="76x76" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-114x114.png" sizes="114x114" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-120x120.png" sizes="120x120" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-144x144.png" sizes="144x144" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-152x152.png" sizes="152x152" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png" sizes="180x180" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#6700EA" />
      <meta name="referrer" content={"strict-origin"} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

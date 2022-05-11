import "@styles/global.css";
import type { AppProps } from "next/app";
// import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "@config/store";
import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics";
import { GOOGLE_ANALYTICS_ID } from "@constants/index";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  usePagesViews(GOOGLE_ANALYTICS_ID);
  return (
    // <AnimatePresence exitBeforeEnter >
    <Provider store={store}>
      <div className="hello w-screen h-screen text-white">
        <Head>
          <title>Krishna Kumar</title>
        </Head>
        <GoogleAnalytics gaMeasurementId={GOOGLE_ANALYTICS_ID} strategy="afterInteractive" />
        <Component {...pageProps} />
      </div>
    </Provider>
    // </AnimatePresence>
  );
}

export default MyApp;

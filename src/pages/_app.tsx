import "@styles/global.css";
import type { AppProps } from "next/app";
// import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "@config/store";
import { GOOGLE_ANALYTICS_ID, SITE_TITLE } from "@constants/index";
import Head from "next/head";
import GoogleAnalytics from "@components/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AnimatePresence exitBeforeEnter >
    <Provider store={store}>
      <div className="hello w-screen h-screen text-white">
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <GoogleAnalytics measurementId={GOOGLE_ANALYTICS_ID} />
        <Component {...pageProps} />
      </div>
    </Provider>
    // </AnimatePresence>
  );
}

export default MyApp;

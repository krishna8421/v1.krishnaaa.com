import "@styles/global.css";
import type { AppProps } from "next/app";
// import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "@config/store";
import { GOOGLE_ANALYTICS_ID } from "@constants";
import GoogleAnalytics from "@components/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AnimatePresence exitBeforeEnter >
    <Provider store={store}>
      <GoogleAnalytics measurementId={GOOGLE_ANALYTICS_ID} />
      <Component {...pageProps} />
    </Provider>
    // </AnimatePresence>
  );
}

export default MyApp;

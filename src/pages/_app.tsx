import "@styles/global.css";
import type { AppProps } from "next/app";
// import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "@app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AnimatePresence exitBeforeEnter >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    // </AnimatePresence>
  );
}

export default MyApp;

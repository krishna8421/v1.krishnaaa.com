import "@styles/global.css";
import type { AppProps } from "next/app";
// import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "@config/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AnimatePresence exitBeforeEnter >
      <Provider store={store}>
        <div className="hello w-screen h-screen text-white">

        <Component {...pageProps} />
        </div>
      </Provider>
    // </AnimatePresence>
  );
}

export default MyApp;

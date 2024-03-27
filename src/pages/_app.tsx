import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { store, persistor } from './../redux/store';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Renato Alves | Portifólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Analytics />
      <SpeedInsights />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { RecoilRoot } from "recoil";

import NavBar from "./components/navBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <NavBar />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

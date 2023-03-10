import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

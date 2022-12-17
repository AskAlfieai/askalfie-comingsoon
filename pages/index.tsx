import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Lottie from "lottie-react";
import rocketAnimation from "../lotties/Rocket.json";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden font-primary bg-slate-900">
      <Head>
        <title>Coming Soon | AskAlfie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid justify-center w-full px-20 space-y-4 text-center ">
        <div className="m-12">
          <Image
            src="/static/imgs/logo.svg"
            className="fixed inset-0 m-4 mx-auto"
            alt="AskAlfie Logo"
            width={75}
            height={75}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold leading-relaxed text-white sm:text-6xl font-primary">
            Next-Gen Letter Writing <br />
            Coming Soon
          </h1>
          <div className="max-w-6xl w-96">
            <Lottie animationData={rocketAnimation} loop={true} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

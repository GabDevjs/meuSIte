import Head from "next/head";

import { About, ContactSection, Home, ProjetoSection } from "../molecules";

export const HomePageTemplate = () => {
  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>

      <div className="fixed h-screen w-screen  left-0 right-0 top-0 bottom-0 -z-10 ">
        <div className="w-screen h-full">
          <video
            src={require("/public/bg.mp4")}
            autoPlay
            muted
            loop
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
      <Home />
      <main className="w-full flex flex-col bg-neutral-900 gap-10">
        <About />
        <ProjetoSection />
        <ContactSection />
      </main>
    </>
  );
};

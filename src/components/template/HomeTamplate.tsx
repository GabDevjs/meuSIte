import Head from "next/head";
import { Section } from "../atoms";
import { About, ContactSection, Home, ProjetoSection, SkillsSection } from "../molecules";

export const HomePageTemplate = () => {
  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>
      <div className="fixed  bg-zinc-400 dark:bg-backGround w-screen h-full bottom-0 top-0 left-0 right-0 -z-10 ">
          <div>
            <div className="ball1 "></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
          </div>
      </div>
      <main className="">
       
        <Home />

        <About />
        
        <ProjetoSection />
        <ContactSection />
      </main>
    </>
  );
};

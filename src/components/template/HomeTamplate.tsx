import Head from "next/head";
import { Section } from "../atoms";
import { Background } from "../atoms/Background";
import {
  About,
  ContactSection,
  Home,
  ProjetoSection,
  SkillsSection,
} from "../molecules";
import { LoadingSection } from "../molecules/Loading";
import { Navbar } from "../organisms";

export const HomePageTemplate = () => {
  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />

      {/* <div>
            <div className="ball1 "></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
          </div> */}
      <div>
       
        <div
        data-aos="fade-down"   
        className="fixed -z-10  backdrop-blur-md w-screen h-screen">
          <Background />
        </div>
        <Home />
        <About />
        <ProjetoSection />
        <ContactSection />
      </div>
    </>
  );
};

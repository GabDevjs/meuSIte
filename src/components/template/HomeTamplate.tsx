import Head from "next/head";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <div className="fixed -z-10  backdrop-blur-md w-screen h-screen">
        <Background />
      </div>

      {loading == true ? (
        <LoadingSection loading={loading} />
      ) : (
        <>
      
          <Home />
          <About />
          <ProjetoSection />
          <ContactSection />
        </>
      )}
    </>
  );
};

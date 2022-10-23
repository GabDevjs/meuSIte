import { useTheme } from "next-themes";
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

interface HomeTamplate {
  backLight: any;
  backDark: any;
}

export const HomePageTemplate = (props: HomeTamplate) => {
  const { backLight, backDark } = props;
  const [loading, setLoading] = useState(true);

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, [theme]);

  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />

      <div className=" bg-gray-300 dark:bg-backGround w-full h-full -z-20"></div>
      <div className="fixed -z-10  backdrop-blur-md w-screen h-screen">
        <Background backDark={backDark} backLight={backLight} />
      </div>
      <Home />
      <About />
      <ProjetoSection />
      <ContactSection />
    </>
  );
};

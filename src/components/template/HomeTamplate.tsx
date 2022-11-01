import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Background } from "../atoms/Background";
import {
  About,
  ContactSection,
  Home,
  ProjetoSection,
} from "../molecules";
import { Navbar } from "../organisms";

interface HomeTamplate {
  backLight: any;
  backDark: any;
}

export const HomePageTemplate = (props: HomeTamplate) => {
  const { backLight, backDark } = props;
  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />

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

import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Background } from "../atoms/Background";
import { About, ContactSection, Home, ProjetoSection } from "../molecules";
import { Navbar } from "../organisms";

interface HomeTamplate {
  backLight: any;
  backDark: any;
}

export const HomePageTemplate = (props: HomeTamplate) => {
  const { backLight, backDark } = props;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />

      <div className="fixed -z-10  backdrop-blur-md w-screen h-screen">
        {width >= 768 ? (
          <Background backLight={backLight} backDark={backDark} />
        ) : (
          <div className=" ball-container">
            <div className="ball1"></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
          </div>
        )}
      </div>
      <Home />
      <About />
      <ProjetoSection />
      <ContactSection />
    </>
  );
};

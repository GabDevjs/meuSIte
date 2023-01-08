import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import { About, ContactSection, Home, ProjetoSection } from "../molecules";

export const HomePageTemplate = () => {
  return (
    <>
      <Head>
        <title>Portifolio </title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>

      <Home />
      <main className="w-full flex flex-col bg-neutral-900 gap-10">
        <About />
        <ProjetoSection />
        <ContactSection />
      </main>
    </>
  );
};

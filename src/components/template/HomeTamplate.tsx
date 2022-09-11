import Head from "next/head";
import { Section } from "../atoms";
import { About, ContactSection, Home, ProjetoSection} from "../molecules";

export const HomePageTemplate = () => {
  return (
    <>
      <Head>
        <title>Boreal</title>
        <link rel="shortcut icon" sizes="32/32" href="/favicon/favicon.ico" />
      </Head>
      <main className="bg-gray-50">
        <Home />
        
        <About />
        <ProjetoSection />
        <ContactSection />
      </main>
    </>
  );
};

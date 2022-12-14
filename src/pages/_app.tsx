import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../services/layout";
import AppContext from "../services/context";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  //time
  const { setTheme, systemTheme } = useTheme();
  const [time, setTime] = useState("");
  const [hora, setHora] = useState(0);
  const [MsDeboasVindas, setMsDeboasVindas] = useState("");

  const [stystemTheme] = useState(systemTheme ? systemTheme : "");

  useEffect(() => {
    setTheme(stystemTheme);
    // Zero Vazio
    function zero(x: any) {
      if (x < 10) {
        x = "0" + x;
      }
      return x;
    }

    function handleGetTime() {
      //Seletor de hora
      let novaHora = new Date();

      let hora = novaHora.getHours();
      let minuto = novaHora.getMinutes();

      hora = zero(hora);
      minuto = zero(minuto);
      setHora(hora);
      setTime(`${hora} : ${minuto}`);

      //Mensagem
      if (hora >= 6 && hora < 12) {
        setMsDeboasVindas("Bom dia");
      } else if (hora >= 12 && hora < 18) {
        setMsDeboasVindas("Boa tarde");
      } else if (hora >= 18 && hora <= 23) {
        setMsDeboasVindas("Boa noite");
      } else if (hora >= 0 && hora < 6) {
        setMsDeboasVindas("Boa noite");
      } else {
        setMsDeboasVindas("Ola");
      }
    }

    handleGetTime();
    if (window.innerWidth >= 768) {
      AOS.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
      });
    } else {
      AOS.init({
        easing: "linear",
        once: false,
        offset: 0,
      });
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <AppContext.Provider value={{ MsDeboasVindas, time, hora }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;

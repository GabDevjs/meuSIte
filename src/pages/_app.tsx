import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import type { AppProps } from 'next/app'
import { Layout } from '../services/layout'
import AppContext from '../services/context'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
  // 

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])
  return (
    <ThemeProvider attribute='class'>
    <AppContext.Provider value={{
    }} >
          <ParallaxProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ParallaxProvider>
    </AppContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp

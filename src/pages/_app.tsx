import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../services/layout'
import AppContext from '../services/context'

function MyApp({ Component, pageProps }: AppProps) {
  // 


  return (
    <AppContext.Provider value={{
    }} >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContext.Provider>
  )
}

export default MyApp

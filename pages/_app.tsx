import type { AppProps } from "next/app"

import DefaultHead from "@components/Head/Default"

import "../styles/globals.css"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultHead />
      <Component {...pageProps} />
    </>
  )
}
export default App

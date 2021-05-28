import type { AppProps } from "next/app"

import withResponsive from "@hocs/withResponsive"

import DefaultHead from "@components/Head/Default"

import GlobalStyle from "@styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DefaultHead />
      <Component {...pageProps} />
    </>
  )
}
export default withResponsive(App)

import type { AppProps } from "next/app"

import withModal from "@hocs/withModal"
import withResponsive from "@hocs/withResponsive"

import DefaultHead from "@components/Meta/Default"
import ThirdParties from "@components/Meta/ThirdParties"

import GlobalStyle, { FontStyle } from "@styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <FontStyle />
      <DefaultHead />
      <Component {...pageProps} />
      <ThirdParties />
    </>
  )
}
export default withResponsive(withModal(App))

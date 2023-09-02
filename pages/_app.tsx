import type { AppProps } from "next/app"

import withModal from "@hocs/withModal"
import WithResponsive from "@hocs/withResponsive"

import DefaultHead from "@components/Meta/Default"
import ThirdParties from "@components/Meta/ThirdParties"

import GlobalStyle, { FontStyle } from "@styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <WithResponsive>
      <GlobalStyle />
      <FontStyle />
      <DefaultHead />
      <Component {...pageProps} />
      <ThirdParties />
      <div id="tooltip-root" />
    </WithResponsive>
  )
}
export default withModal(App)

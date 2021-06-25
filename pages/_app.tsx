import type { AppProps } from "next/app"
import { Provider as StoreProvider } from "react-redux"

import store from "@store/index"

import ModalContainer from "@modals/Container"

import withResponsive from "@hocs/withResponsive"

import DefaultHead from "@components/Head/Default"

import GlobalStyle, { FontStyle } from "@styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <GlobalStyle />
      <FontStyle />
      <DefaultHead />
      <Component {...pageProps} />
      <ModalContainer />
    </StoreProvider>
  )
}
export default withResponsive(App)

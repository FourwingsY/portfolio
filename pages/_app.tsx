import type { AppProps } from "next/app"
import { Provider as StoreProvider } from "react-redux"

import store from "@store/index"

import withResponsive from "@hocs/withResponsive"

import DefaultHead from "@components/Head/Default"

import GlobalStyle from "@styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <GlobalStyle />
      <DefaultHead />
      <Component {...pageProps} />
    </StoreProvider>
  )
}
export default withResponsive(App)

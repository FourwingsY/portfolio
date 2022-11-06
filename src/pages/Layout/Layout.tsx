import type { CSSProperties } from "styled-components"

import * as S from "./Layout.style"
import Header from "./components/Header"

interface Props {
  style?: CSSProperties
}
const Layout = ({ style, children }: React.PropsWithChildren<Props>) => {
  return (
    <S.Layout>
      <Header />
      <S.Main style={style}>{children}</S.Main>
    </S.Layout>
  )
}

export default Layout

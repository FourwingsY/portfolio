import type { CSSProperties } from "styled-components"

import * as S from "./Layout.style"

interface Props {
  style?: CSSProperties
}
const Layout: React.FC<Props> = ({ style, children }) => {
  return (
    <S.Layout>
      <S.Main style={style}>{children}</S.Main>
    </S.Layout>
  )
}

export default Layout

import Header from "../../../app/components/Header"
import * as S from "./Layout.style"

interface Props {
  style?: React.CSSProperties
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

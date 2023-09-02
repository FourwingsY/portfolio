import "@reactleaf/theme/theme.css"
import StyledComponentsRegistry from "lib/StyledComponentsRegistry"

import Providers from "./Providers"
import Header from "./components/Header"
import * as S from "./layout.style"
import "./reset.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <PageLayout>{children}</PageLayout>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

function PageLayout({ style, children }: { style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <S.Layout>
      <Header />
      <S.Main style={style}>{children}</S.Main>
    </S.Layout>
  )
}

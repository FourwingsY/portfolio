import "@reactleaf/modal/style.css"
import "@reactleaf/theme/theme.css"

import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry"
import GA from "@/lib/thirdParties/GA"

import Header from "@/components/Header"
import Providers from "@/components/Providers"

import "./global.css"
import * as S from "./layout.style"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>YG's Portfolio</title>
        <link rel="icon" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <GA />
      </head>
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

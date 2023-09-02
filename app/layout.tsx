import StyledComponentsRegistry from "lib/StyledComponentsRegistry"

import Providers from "./Providers"
import "./layout.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

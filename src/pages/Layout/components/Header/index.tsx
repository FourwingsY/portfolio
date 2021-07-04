import { useResponsiveContext } from "@hocs/withResponsive"

import Header from "./Header"
import HeaderMobile from "./Header.mobile"

export default function Responsive() {
  const { mobile } = useResponsiveContext()
  if (mobile) return <HeaderMobile />

  return <Header />
}

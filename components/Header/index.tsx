"use client"

import { useResponsiveContext } from "@/components/Providers/WithResponsive"

import Header from "./Header"
import HeaderMobile from "./Header.mobile"

export default function Responsive() {
  const { mobile } = useResponsiveContext()
  if (mobile) return <HeaderMobile />

  return <Header />
}

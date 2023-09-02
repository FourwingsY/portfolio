"use client"

import { ModalProvider } from "@reactleaf/modal"

import WithResponsive from "@hocs/withResponsive"

export default function ClientSideProviders({ children }: { children: React.ReactNode }) {
  return (
    <WithResponsive>
      <ModalProvider register={{}}>{children}</ModalProvider>
    </WithResponsive>
  )
}

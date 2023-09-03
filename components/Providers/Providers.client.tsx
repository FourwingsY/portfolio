"use client"

import { ModalProvider } from "@reactleaf/modal"

import register from "../modals/register"
import WithResponsive from "./WithResponsive"

export default function ClientSideProviders({ children }: { children: React.ReactNode }) {
  return (
    <WithResponsive>
      <ModalProvider register={register}>{children}</ModalProvider>
    </WithResponsive>
  )
}

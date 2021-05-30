import { createAction } from "@reduxjs/toolkit"

import { ModalType, ModalProps } from "@modals/types"

export type OpenModalPayload<T, Type = T extends ModalType ? T : never> = Type extends ModalType
  ? {
      type: Type
      props: ModalProps<Type>
      overlayOptions?: OverlayOptions
    }
  : never
export interface OverlayOptions {
  dim?: boolean
  closeDelay?: number
  closeOnOverlayClick?: boolean
  preventScroll?: boolean
}

type OpenmModalPayload<T extends ModalType> = { type: T; props: ModalProps<T>; overlayOptions?: { dim?: boolean } }

const openModal = createAction<OpenmModalPayload<ModalType>>("@modal/OPEN_MODAL")
openModal({ type: "Alert", props: { message: "2" } })

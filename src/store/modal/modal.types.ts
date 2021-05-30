import { ModalType, ModalProps } from "@modals/types"

export interface OpenModalPayload<T extends ModalType> {
  type: T
  id: string
  props: ModalProps<T>
  overlayOptions?: OverlayOptions
}

export interface OverlayOptions {
  dim?: boolean
  closeDelay?: number
  closeOnOverlayClick?: boolean
  preventScroll?: boolean
}

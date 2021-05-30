import { ModalType, ModalProps } from "@modals/types"

export interface OpenModalPayload<T extends ModalType> {
  type: T
  props: ModalProps<T>
  overlayOptions?: OverlayOptions
}

export interface OverlayOptions {
  dim?: boolean
  closeOnOverlayClick?: boolean
  preventScroll?: boolean
}

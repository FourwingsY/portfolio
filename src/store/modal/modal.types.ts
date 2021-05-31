import { ModalType, ModalOwnProps } from "@modals/types"

export type OpenModalPayload<T extends ModalType> = {
  type: T
  props: ModalOwnProps<T>
  overlayOptions?: OverlayOptions
}

export type EnhancedModalPayload<T extends ModalType> = OpenModalPayload<T> & { id: string }

export interface OverlayOptions {
  dim?: boolean
  closeDelay?: number
  closeOnOverlayClick?: boolean
  preventScroll?: boolean
}

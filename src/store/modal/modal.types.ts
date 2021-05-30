import { ModalType, ModalProps } from "@modals/types"

export type OpenModalPayload<T, Type = T extends ModalType ? T : never> = Type extends ModalType
  ? {
      type: Type
      props: ModalProps<Type>
      overlayOptions?: OverlayOptions
    }
  : never

export type EnhancedModalPayload<T> = OpenModalPayload<T> & { id: string }

export interface OverlayOptions {
  dim?: boolean
  closeDelay?: number
  closeOnOverlayClick?: boolean
  preventScroll?: boolean
}

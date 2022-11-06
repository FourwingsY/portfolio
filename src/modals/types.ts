import { Modals } from "./_register"

export type ModalType = keyof Modals
export type ModalProps<T extends ModalType> = React.ComponentProps<Modals[T]> & JSX.IntrinsicAttributes
export type ModalOwnProps<T> = T extends ModalType ? Omit<ModalProps<T>, keyof BasicModalProps> : never

export interface BasicModalProps {
  close: () => void
  visible: boolean // for animation
}

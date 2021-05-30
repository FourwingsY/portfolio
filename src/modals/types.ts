import { Modals } from "./register"

export type Modal<P = unknown> = React.FC<P & BasicModalProps>
export type ModalType = keyof Modals
export type ModalProps<T extends ModalType> = Omit<React.ComponentProps<Modals[T]>, keyof BasicModalProps>

export interface BasicModalProps {
  close: () => void
  visible: boolean // for animation
}

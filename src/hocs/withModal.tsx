import { createContext, Dispatch, useContext, useReducer } from "react"

import ModalContainer from "@modals/Container"
import { ModalOwnProps, ModalType } from "@modals/types"

export type OpenModalPayload<T extends ModalType> = {
  type: T
  props: ModalOwnProps<T>
  overlayOptions?: OverlayOptions
}

export type EnhancedModalPayload<T extends ModalType> = OpenModalPayload<T> & { id: string }

export interface OverlayOptions {
  dim?: boolean | string
  closeDelay?: number
  closeOnOverlayClick?: boolean
  preventScroll?: boolean
}

type ModalContextType = {
  openModal: <T extends ModalType>(payload: OpenModalPayload<T>) => void
  closeModal: (payload: { id: string }) => void
  closeAll: () => void
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => void 0,
  closeModal: () => void 0,
  closeAll: () => void 0,
})

/** action creators */
function openModal(payload: OpenModalPayload<ModalType>) {
  return {
    type: "@modal/OPEN_MODAL" as const,
    payload: {
      ...payload,
      id: `${payload.type}_${Date.now()}`,
    },
  }
}
function closeModal(payload: { id: string }) {
  return { type: "@modal/CLOSE_MODAL" as const, payload }
}
function closeAll() {
  return { type: "@modal/CLOSE_ALL" as const }
}

/** reducer */
type ModalActionCreator = typeof openModal | typeof closeModal | typeof closeAll
type ModalAction = ReturnType<ModalActionCreator>
function reducer(state: EnhancedModalPayload<ModalType>[], action: ModalAction) {
  switch (action.type) {
    case "@modal/OPEN_MODAL":
      return [...state, action.payload]
    case "@modal/CLOSE_MODAL":
      return state.filter((modal) => modal.id !== action.payload.id)
    case "@modal/CLOSE_ALL":
      return []
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionCreator<A> = { (...args: any[]): A }
function bindActionCreator<A, C extends ActionCreator<A>>(actionCreator: C, dispatch: Dispatch<A>) {
  return (...args: Parameters<C>) => dispatch(actionCreator(...args))
}

const withModal = <P,>(Component: React.ComponentType<P>) => {
  const WithModal = (props: P & JSX.IntrinsicAttributes) => {
    const [openedModals, dispatch] = useReducer(reducer, [])
    const modalActions = {
      openModal: bindActionCreator(openModal, dispatch),
      closeModal: bindActionCreator(closeModal, dispatch),
      closeAll: bindActionCreator(closeAll, dispatch),
    }

    return (
      <ModalContext.Provider value={modalActions}>
        <Component {...props} />
        <ModalContainer openedModals={openedModals} />
      </ModalContext.Provider>
    )
  }
  return WithModal
}

export default withModal

export function useModal() {
  return useContext(ModalContext)
}

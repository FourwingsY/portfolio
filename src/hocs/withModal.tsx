import { createContext, Dispatch, useContext, useReducer } from "react"
import { ActionCreator, compose } from "redux"

import { EnhancedModalPayload, OpenModalPayload } from "@store/modal/modal.types"

import ModalContainer from "@modals/Container"
import { ModalType } from "@modals/types"

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
type ModalActionCreator = typeof openModal | typeof closeModal | typeof closeAll
type ModalAction = ReturnType<ModalActionCreator>
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

function bindActionCreator<A, C extends ActionCreator<A>>(
  actionCreator: C,
  dispatch: Dispatch<A>
): (...args: Parameters<C>) => void {
  return compose(dispatch, actionCreator)
}

const withModal = <P,>(Component: React.ComponentType<P>) => {
  const WithModal = (props: P) => {
    const [openedModals, dispatch] = useReducer(reducer, [])

    return (
      <ModalContext.Provider
        value={{
          openModal: bindActionCreator(openModal, dispatch),
          closeModal: bindActionCreator(closeModal, dispatch),
          closeAll: bindActionCreator(closeAll, dispatch),
        }}
      >
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

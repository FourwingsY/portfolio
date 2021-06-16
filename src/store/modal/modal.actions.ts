import { createAction } from "@reduxjs/toolkit"

import { ModalType } from "@modals/types"

import { EnhancedModalPayload, OpenModalPayload } from "./modal.types"

function enhanceModalPayload<T extends ModalType>(payload: OpenModalPayload<T>): { payload: EnhancedModalPayload<T> } {
  return {
    payload: {
      ...payload,
      id: `${payload.type}_${Date.now()}`,
    },
  }
}

const openModal = createAction("@modal/OPEN_MODAL", enhanceModalPayload)
const closeModal = createAction<{ id: string }, "@modal/CLOSE_MODAL">("@modal/CLOSE_MODAL")
const closeAll = createAction("@modal/CLOSE_ALL")

export default { openModal, closeModal, closeAll }

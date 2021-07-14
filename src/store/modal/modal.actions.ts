import { createAction, PayloadAction } from "@reduxjs/toolkit"

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

// openModal 함수 자체가 generic function이어야
// modalType: T 에 대한 props의 타입 추론이 가능하다
export type OpenModal = <T extends ModalType>(
  payload: OpenModalPayload<T>
) => PayloadAction<EnhancedModalPayload<T>, "@modal/OPEN_MODAL">

const openModal = createAction("@modal/OPEN_MODAL", enhanceModalPayload) as OpenModal
const closeModal = createAction<{ id: string }, "@modal/CLOSE_MODAL">("@modal/CLOSE_MODAL")
const closeAll = createAction("@modal/CLOSE_ALL")

export default { openModal, closeModal, closeAll }

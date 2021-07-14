import { createReducer } from "@reduxjs/toolkit"

import { ModalType } from "@modals/types"

import actions, { OpenModal } from "./modal.actions"
import { EnhancedModalPayload } from "./modal.types"

export type ModalState = EnhancedModalPayload<ModalType>[]
const initialState: ModalState = []

export default createReducer(initialState, (builder) =>
  builder
    .addCase("@modal/OPEN_MODAL", (state, action: ReturnType<OpenModal>) => {
      state.push(action.payload)
    })
    .addCase(actions.closeModal, (state, action) => state.filter((modal) => modal.id !== action.payload.id))
    .addCase(actions.closeAll, () => initialState)
)

import { createReducer } from "@reduxjs/toolkit"

import { ModalType } from "@modals/types"

import actions from "./modal.actions"
import { OpenModalPayload } from "./modal.types"

export type ModalState = OpenModalPayload<ModalType>[]
const initialState: ModalState = []

export default createReducer(initialState, (builder) =>
  builder.addCase(actions._openModal, (state, action) => {
    state.push(action.payload)
  })
)

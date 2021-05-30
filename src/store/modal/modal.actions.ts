/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAction } from "@reduxjs/toolkit"

import { ModalType } from "@modals/types"

import { OpenModalPayload } from "./modal.types"

// this is weak-typed action, we will expose this to RootActions for @reduxjs/toolkit can understand payload of "@modal/OPEN_MODAL"
const openModal = createAction("@modal/OPEN_MODAL", <T extends ModalType>(payload: OpenModalPayload<T>) => ({
  payload,
  id: `${payload.type}_${Date.now()}`,
}))
const closeModal = createAction<{ id: string }, "@modal/CLOSE_MODAL">("@modal/CLOSE_MODAL")
const closeAll = createAction("@modal/CLOSE_ALL")

export default { openModal, closeModal, closeAll }

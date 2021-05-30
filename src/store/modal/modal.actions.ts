/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAction } from "@reduxjs/toolkit"

import { ModalType } from "@modals/types"

import { OpenModalPayload } from "./modal.types"

// this is strong-typed action, we will use this action for dispatch in our app
const openModal =
  <T extends ModalType>(type: T) =>
  (payload: Omit<OpenModalPayload<T>, "type" | "id">) =>
    createAction<OpenModalPayload<T>, "@modal/OPEN_MODAL">("@modal/OPEN_MODAL")({
      ...payload,
      type,
      id: `${type}_${Date.now()}`,
    })

// this is weak-typed action, we will expose this to RootActions for @reduxjs/toolkit can understand payload of "@modal/OPEN_MODAL"
const _openModal = createAction<OpenModalPayload<ModalType>>("@modal/OPEN_MODAL")
const closeModal = createAction<{ id: string }, "@modal/CLOSE_MODAL">("@modal/CLOSE_MODAL")
const closeAll = createAction("@modal/CLOSE_ALL")

export { openModal }
export default { _openModal, closeModal, closeAll }

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAction } from "@reduxjs/toolkit"

import { ModalType } from "@modals/types"

import { OpenModalPayload } from "./modal.types"

// this is strong-typed action, we will use this action for dispatch in our app
const openModal =
  <T extends ModalType>(type: T) =>
  (payload: Omit<OpenModalPayload<T>, "type">) =>
    createAction<OpenModalPayload<T>, "@modal/OPEN_MODAL">("@modal/OPEN_MODAL")({ ...payload, type })

// this is weak-typed action, we will expose this to RootActions for @reduxjs/toolkit can understand payload of "@modal/OPEN_MODAL"
const _openModal = createAction<OpenModalPayload<ModalType>>("@modal/OPEN_MODAL")
const closeModal = createAction<{ key: string }, "@modal/CLOSE_MODAL">("@modal/CLOSE_MODAL")

export { openModal }
export default { _openModal, closeModal }

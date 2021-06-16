import { ActionCreator } from "@reduxjs/toolkit"

import { AsyncAction } from "./async"
import asyncActions from "./async/async.actions"
import modalActions from "./modal/modal.actions"

const actions = { ...modalActions, ...asyncActions }

export default actions

type RootActionType<RootAction extends Record<string, ActionCreator<any> | AsyncAction>> = {
  [K in keyof RootAction]: ActionType<RootAction[K]>
}[keyof RootAction]

type ActionType<Action extends any> = Action extends ActionCreator<any>
  ? ReturnType<Action>
  : Action extends AsyncAction
  ? ReturnType<Action["request"] | Action["success"] | Action["failure"]>
  : never

export type DefinedActions = RootActionType<typeof actions>

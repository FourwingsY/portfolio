import { ActionCreator } from "@reduxjs/toolkit"

import { AsyncAction } from "./async"
import asyncActions from "./async/async.actions"
import modalActions from "./modal/modal.actions"

export type DefinedActions = RootActionType<typeof modalActions> | RootActionType<typeof asyncActions>

type RootActionType<RootAction extends Record<string, ActionCreator<any> | AsyncAction<any, any>>> = {
  [K in keyof RootAction]: ActionType<RootAction[K]>
}[keyof RootAction]

type ActionType<Action extends any> = Action extends AsyncAction<any, any>
  ? ReturnType<Action["request"] | Action["success"] | Action["failure"]>
  : Action extends ActionCreator<any>
  ? ReturnType<Action>
  : never

import { createDispatchHook, createSelectorHook } from "react-redux"

import actions from "./actions"
import store from "./index"

type ActionKeys = keyof typeof actions
type Actions = ReturnType<typeof actions[ActionKeys]>
type RootState = ReturnType<typeof store.getState>
export const useDispatch = createDispatchHook<RootState, Actions>()
export const useSelector = createSelectorHook<RootState>()

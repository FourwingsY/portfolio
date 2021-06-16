import { createDispatchHook, createSelectorHook } from "react-redux"

import { DefinedActions } from "./actions"
import store from "./index"

type RootState = ReturnType<typeof store.getState>
export const useDispatch = createDispatchHook<RootState, DefinedActions>()
export const useSelector = createSelectorHook<RootState>()

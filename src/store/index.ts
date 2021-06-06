import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import modal from "@store/modal/modal.reducer"

export const rootReducer = { modal }
export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["@modal/OPEN_MODAL"],
    },
  }),
})

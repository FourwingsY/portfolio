import { configureStore } from "@reduxjs/toolkit"

import modal from "@store/modal/modal.reducer"

export const rootReducer = { modal }
export default configureStore({ reducer: rootReducer })

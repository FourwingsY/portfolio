import { createAsyncAction } from "@store/async"

import * as T from "./async.types"

const testAction = createAsyncAction("@async/REQUEST", "@async/SUCCESS", "@async/FAILURE")<T.Response, T.Payload>()

export default { testAction }

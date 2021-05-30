import Alert from "./Alert"
import Confirm from "./Confirm"
import Information from "./Information"
import Slideup from "./Slideup"

// this file is just used for types.
// do not import this
// except one file: ./types.ts
const modals = {
  Alert,
  Confirm,
  Information,
  Slideup,
}

export type Modals = typeof modals

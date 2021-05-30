import Alert from "./Alert"
import Confirm from "./Confirm"

// this file is just used for types.
// do not import this
// except one file: ./types.ts
const modals = {
  Alert,
  Confirm,
}

export type Modals = typeof modals

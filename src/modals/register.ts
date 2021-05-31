import Alert from "./Alert"
import Confirm from "./Confirm"
import Information from "./Information"
import Slideup from "./Slideup"

// this file is just used for types only.
// If other file import this register, bundle size will be increased
// do not import this except the file: @modals/types.ts
const modals = {
  Alert,
  Confirm,
  Information,
  Slideup,
}

export type Modals = typeof modals

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const register = {
  Alert: () => import("./Alert"),
  Confirm: () => import("./Confirm"),
  Slideup: () => import("./Slideup"),
  MoleInformation: () => import("./MoleInformation"),
  Information: () => import("./Information"),
}

export default register

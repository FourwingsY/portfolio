/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const register = {
  Alert: () => import("./Alert"),
  Confirm: () => import("./Confirm"),
  Slideup: () => import("./Slideup"),
  MoleInformation: () => import("./MoleInformation"),
  Information: () => import("./Information"),

  "@maps/rest-area/visited": () => import("./maps/rest-area/Visited"),
  "@maps/rest-area/unvisited": () => import("./maps/rest-area/Unvisited"),
}

export default register

export interface Work {
  duration: [Date, Date | null]
}

export const realclass: Work = {
  duration: [new Date(2020, 7, 18), null],
}
export const junior: Work = {
  duration: [new Date(2020, 5, 1), new Date(2020, 9, 30)],
}
export const muzy: Work = {
  duration: [new Date(2020, 1, 25), new Date(2020, 9, 30)],
}

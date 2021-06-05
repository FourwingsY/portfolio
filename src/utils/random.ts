export function getRandomInRange(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

export function getRandomInt(min: number, max: number): number {
  const r = getRandomInRange(min, max)
  return Math.floor(r)
}

export function getRandomColor(colorSet?: string[]): string {
  if (colorSet) {
    const index = getRandomInt(0, colorSet.length)
    return colorSet[index]
  }
  const hue = getRandomInt(0, 360)
  const sat = 100
  const light = getRandomInt(45, 55)
  return `hsl(${hue}, ${sat}%, ${light}%)`
}

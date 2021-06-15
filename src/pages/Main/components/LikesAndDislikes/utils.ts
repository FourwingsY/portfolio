interface Position {
  x: number
  y: number
}
interface TastePosition {
  key: string
  position: Position
}

let tastePositions: TastePosition[] = []

function getRandomPosition(width: number, height: number) {
  const notTooEdge = () => 0.05 + Math.random() * 0.9
  return { x: width * notTooEdge(), y: height * notTooEdge() }
}

function collisionCheck(pos: Position, others: TastePosition[], size: number) {
  function collide(pos: Position, pos2: Position) {
    const distance = Math.max(Math.abs(pos.x - pos2.x), Math.abs(pos.y - pos2.y))
    return distance < size
  }
  return others.some((t) => collide(pos, t.position))
}

export function createPositionFactory(width: number, height: number, size: number) {
  return function getPosition(key: string): Position {
    const others = tastePositions.filter((p) => p.key !== key)
    let pos = getRandomPosition(width, height)
    let tryCount = 0
    while (collisionCheck(pos, others, size)) {
      pos = getRandomPosition(width, height)
      tryCount += 1
      if (tryCount > 10) return { x: -999, y: -999 }
    }
    tastePositions = [...others, { key, position: pos }]
    return pos
  }
}

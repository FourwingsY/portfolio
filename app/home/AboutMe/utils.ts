import { useCallback } from "react"

import { getRandomInRange } from "@/lib/utils/random"

export interface Position {
  x: number
  y: number
}
interface TastePosition {
  key: string
  position: Position
}

let tastePositions: TastePosition[] = []

function getRandomPosition(width: number, height: number, size: number) {
  return { x: getRandomInRange(size, width - size), y: getRandomInRange(size, height - size) }
}

function collisionCheck(pos: Position, others: TastePosition[], size: number) {
  function isCollided(pos: Position, pos2: Position) {
    const distance = Math.max(Math.abs(pos.x - pos2.x), Math.abs(pos.y - pos2.y))
    return distance < size
  }
  return others.some((t) => isCollided(pos, t.position))
}

export function usePositionFactory(width: number, height: number, size: number): (key: string) => Position | null {
  return useCallback(
    function getPosition(key: string): Position | null {
      const others = tastePositions.filter((p) => p.key !== key)

      // try 10 times and giveup
      let pos = getRandomPosition(width, height, size)
      let tryCount = 0
      while (collisionCheck(pos, others, size)) {
        pos = getRandomPosition(width, height, size)
        tryCount += 1
        if (tryCount > 10) return null
      }
      tastePositions = [...others, { key, position: pos }]
      return pos
    },
    [width, height],
  )
}

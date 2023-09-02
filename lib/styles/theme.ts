import Color from "color"

const mainColor = (l = 50) => Color("hsl(220, 60%, 50%)").lightness(l).string()
const highlightColor = (l = 50) => Color("hsl(220, 80%, 50%)").lightness(l).string()
// const dimColor = (l = 50) => Color("hsl(220, 40%, 50%)").lightness(l).string()

export const palette = {
  primary: mainColor(), // hsl(220, 60%, 50%)
  primary60: mainColor(60), // hsl(220, 60%, 60%)
  primary70: mainColor(70), // hsl(220, 60%, 70%)
  primary80: mainColor(80), // hsl(220, 60%, 80%)
  primary95: mainColor(95), // hsl(220, 60%, 95%)
  primary98: mainColor(98), // hsl(220, 60%, 98%)

  highlight: highlightColor(), // hsl(220, 80%, 50%)
}

import ReactIcon from "@icons/ReactIcon"
import TypeScript from "@icons/TypeScript"

export interface Taste {
  icon: React.ReactNode
  name: string
  content: React.ReactNode
}
export const TASTES: Taste[] = [
  { icon: <i>๐ฅ</i>, name: "์ฐ์ ", content: "์ฐ์ ๋ฅผ ์ข์ํฉ๋๋ค.\nํ๋ฃจ... 1L?" },
  { icon: <i>โ</i>, name: "์ปคํผ", content: "๊ฐ๋ฐ์๋ ์นดํ์ธ์ ์ฝ๋๋ก\n์ ํํ๋ ๊ธฐ๊ณ๋ผ์ฃ . ๋์ํฉ๋๋ค." },
  {
    icon: <i>๐ฎ</i>,
    name: "๊ฒ์",
    content: (
      <p>
        <a href="https://steamcommunity.com/profiles/76561198017906322" target="_blank">
          ์คํ
        </a>{" "}
        ๊ตฌ๊ฒฝ์ค์ธ์.
      </p>
    ),
  },
  { icon: <i>๐งฉ</i>, name: "ํผ์ฆ", content: "๋จธ๋ฆฌ๋ฅผ ์ธ๋งค๋ค ๋ฌธ์ ๋ฅผ ํ์์ ๋,\n์ฑ์ทจ๊ฐ์ ๋๋๋๋ค." },
  {
    icon: <i>๐๏ธ</i>,
    name: "๊ฑด์ค",
    content: "์ฒด๊ณ์ ์ผ๋ก ์ฐจ๊ณก์ฐจ๊ณก\n์์ฌ์๋ ๋ชจ์ต์ด ์๋ฆ๋ต์ต๋๋ค.\nํ์ง๋ง ๊ทธ ์์ ์ฐฝ์์ฑ๋ ์ค์ํ์ฃ .",
  },
  {
    icon: <ReactIcon />,
    name: "React",
    content: (
      <p>
        ์ผ๋ง๋ ํ๋๊ตฌ์? <br />
        <a href="/showcase" onClick={(e) => e.stopPropagation()}>
          ์ผ์ผ์ด์ค
        </a>
        ์์ ๊ตฌ๊ฒฝํ์ธ์.
      </p>
    ),
  },
  {
    icon: <TypeScript />,
    name: "Typescript",
    content: "ํ์์คํฌ๋ฆฝํธ ์ ๋ค๋ฆญ์ ํ์ฉํด\n๊ฐ๋ ฅํ ํ์ ์ ํ์ ๋๋ ๊ฒ์\n๊ด์ฌ์ด ์์ต๋๋ค.",
  },
  { icon: <i>๐</i>, name: "์คํ๊ฒํฐ", content: "์คํ๊ฒํฐ๋ ์ข์ํ์ง๋ง\n์คํ๊ฒํฐ ์ฝ๋๋ ์ซ์ต๋๋ค." },
  { icon: <i>๐ซ</i>, name: "FPS", content: "FPS๋ ์ ฌ๋ณ์๋๋ค." },
  { icon: <i>โฐ</i>, name: "๋ฆฌ์ผํ์", content: "์ค์๊ฐ ๊ฒฝ์ ๊ฒ์์\n์ข์ํ์ง ์์ต๋๋ค." },
  { icon: <i>๐ฅด</i>, name: "ํ์ ", content: "ํ์ ์ด ๋ค์ํ๋ค๋ ์ด์ผ๊ธฐ๋ฅผ\n์ข์ข ๋ฃ์ต๋๋ค." },
  { icon: <i>๐</i>, name: "์ฌ์ด", content: "๊ณ ์์ด ํ ๋ง๋ฆฌ๋ฅผ ๊ธฐ๋ฅด๊ณ  ์...\n์๋ ์ด์   ๋ถ๋ชจ๋์ด ๊ธฐ๋ฅด์๋ค์." },
  { icon: <i>๐คฟ</i>, name: "์ค์ฟ ๋ฒ๋ค์ด๋น", content: "์ค์ฟ ๋ฒ๋ค์ด๋น ์ด๋๋ฐด์ค๋\n์๊ฒฉ์ฆ์ด ์์ต๋๋ค." },
]

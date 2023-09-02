import ReactIcon from "@/icons/ReactIcon"
import TypeScript from "@/icons/TypeScript"

export interface Taste {
  icon: React.ReactNode
  name: string
  content: React.ReactNode
}
export const TASTES: Taste[] = [
  { icon: <i>🥛</i>, name: "우유", content: "우유를 좋아합니다.\n하루... 1L?" },
  { icon: <i>☕</i>, name: "커피", content: "개발자는 카페인을 코드로\n전환하는 기계라죠. 동의합니다." },
  {
    icon: <i>🎮</i>,
    name: "게임",
    content: (
      <p>
        <a href="https://steamcommunity.com/profiles/76561198017906322" target="_blank">
          스팀
        </a>{" "}
        구경오세요.
      </p>
    ),
  },
  { icon: <i>🧩</i>, name: "퍼즐", content: "머리를 싸매다 문제를 풀었을 때,\n성취감을 느낍니다." },
  {
    icon: <i>🏗️</i>,
    name: "건설",
    content: "체계적으로 차곡차곡\n쌓여있는 모습이 아름답습니다.\n하지만 그 안의 창의성도 중요하죠.",
  },
  {
    icon: <ReactIcon />,
    name: "React",
    content: (
      <p>
        얼마나 하냐구요? <br />
        <a href="/showcase" onClick={(e) => e.stopPropagation()}>
          쇼케이스
        </a>
        에서 구경하세요.
      </p>
    ),
  },
  {
    icon: <TypeScript />,
    name: "Typescript",
    content: "타입스크립트 제네릭을 활용해\n강력한 타입 제한을 두는 것에\n관심이 있습니다.",
  },
  { icon: <i>🍝</i>, name: "스파게티", content: "스파게티는 좋아하지만\n스파게티 코드는 싫습니다." },
  { icon: <i>🔫</i>, name: "FPS", content: "FPS는 젬병입니다." },
  { icon: <i>⏰</i>, name: "리얼타임", content: "실시간 경쟁 게임은\n좋아하지 않습니다." },
  { icon: <i>🥴</i>, name: "표정", content: "표정이 다양하다는 이야기를\n종종 듣습니다." },
  { icon: <i>🐈</i>, name: "섬이", content: "고양이 한 마리를 기르고 있...\n아니 이젠 부모님이 기르시네요." },
  { icon: <i>🤿</i>, name: "스쿠버다이빙", content: "스쿠버다이빙 어드밴스드\n자격증이 있습니다." },
]

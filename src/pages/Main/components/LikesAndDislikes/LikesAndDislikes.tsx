import ReactIcon from "@icons/ReactIcon"
import TypeScript from "@icons/Typescript"

import * as S from "./LikesAndDislikes.style"

const LikesAndDislikes = () => {
  return (
    <S.LikesAndDislikes>
      <S.Likes>
        <h1>좋아하는 것 ❤️</h1>
        <dl>
          <dt>🥛 ☕</dt>
          <dd>우유와 커피를 좋아합니다: 라떼를 사랑합니다.</dd>
          <dt>🎮 🧩 🏗️</dt>
          <dd>
            퍼즐, 시뮬레이션 같이 머리 쓰는 게임을 좋아합니다. 게임 취향은{" "}
            <a href="https://steamcommunity.com/profiles/76561198017906322">여기</a>
          </dd>
          <dt>
            🏛️ <ReactIcon width={32} height={36} /> <TypeScript width={32} height={36} />
          </dt>
          <dd>
            구조적인 프로그래밍을 좋아합니다. <br />
            타입스크립트 제네릭을 활용해 강력한 타입 제한을 두는 것에 관심이 있습니다.
          </dd>
        </dl>
      </S.Likes>
      <S.Dislikes>
        <h1>싫어하는 것 😵</h1>
        <dl>
          <dt>🍝</dt>
          <dd>
            스파게티는 좋아하지만 스파게티 코드는 싫습니다. <br />
            라자냐같이 한층 한층 쌓인 코드를 좋아합니다.
          </dd>
          <dt>🔫 ⏰</dt>
          <dd>
            실시간 게임을 좋아하지 않습니다. <br />
            정확하게는 실시간 <strong>경쟁</strong> 게임을 좋아하지 않습니다.
          </dd>
        </dl>
      </S.Dislikes>
    </S.LikesAndDislikes>
  )
}

export default LikesAndDislikes

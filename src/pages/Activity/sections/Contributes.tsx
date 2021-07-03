import { ContentsWidth } from "@styles/adaptive"

import * as S from "./Contributes.style"

export function removeNulls<S>(value: S | undefined | null): value is S {
  return Boolean(value)
}

const CONTRIBUTES = [
  "https://github.com/iamkun/dayjs/pull/1555",
  "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/52803",
  "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/22463",
  "https://github.com/moment/moment/pull/3839",
  "https://github.com/draft-js-plugins/draft-js-plugins/pull/480",
  "https://github.com/stefanpenner/es6-promise/pull/135",
]
const Contributes = () => {
  const parsedContributes = CONTRIBUTES.map((pr) => {
    const regex = /https:\/\/github.com\/[\w-]+\/([\w-]+)\/pull\/(\d+)/
    const matched = regex.exec(pr)
    if (!matched) return null
    const [link, repository, prNumber] = matched
    return { link, repository, prNumber }
  }).filter(removeNulls)

  return (
    <S.Contributes>
      <ContentsWidth>
        <S.Title>Contributes to Open source community</S.Title>
        <S.List>
          {parsedContributes.map((pr) => (
            <a href={pr.link} target="_blank">
              <S.Item>
                <S.Repository>{pr.repository}</S.Repository>
                <S.PullRequest>{pr.prNumber}</S.PullRequest>
              </S.Item>
            </a>
          ))}
        </S.List>
      </ContentsWidth>
    </S.Contributes>
  )
}

export default Contributes

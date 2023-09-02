import { PR_LIST } from "@/lib/constants/open-source"

import * as S from "./Contributes.style"

export function removeNulls<S>(value: S | undefined | null): value is S {
  return Boolean(value)
}

const Contributes = () => {
  const parsedContributes = PR_LIST.map((pr) => {
    const regex = /https:\/\/github.com\/[\w-]+\/([.\w-]+)\/pull\/(\d+)/
    const matched = regex.exec(pr.link)
    if (!matched) return null
    const [link, repository, prNumber] = matched
    return { link, repository, prNumber, date: pr.date }
  }).filter(removeNulls)

  return (
    <S.Contributes>
      <S.Title>Contributes to Open source community</S.Title>
      <S.List>
        {parsedContributes.map((pr) => (
          <a key={pr.repository + pr.prNumber} href={pr.link} target="_blank">
            <S.Item>
              <S.Repository>{pr.repository}</S.Repository>
              <S.PullRequest>{pr.prNumber}</S.PullRequest>
              <S.MergedDate>{pr.date}</S.MergedDate>
            </S.Item>
          </a>
        ))}
      </S.List>
    </S.Contributes>
  )
}

export default Contributes

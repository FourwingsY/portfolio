import * as S from "./Contributes.style"

export function removeNulls<S>(value: S | undefined | null): value is S {
  return Boolean(value)
}

const CONTRIBUTES = [
  { link: "https://github.com/iamkun/dayjs/pull/1555", date: "2021-07-01" },
  { link: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/52803", date: "2021-05-11" },
  { link: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/22463", date: "2018-01-04" },
  { link: "https://github.com/moment/moment/pull/3839", date: "2017-08-09" },
  { link: "https://github.com/draft-js-plugins/draft-js-plugins/pull/480", date: "2016-10-22" },
  { link: "https://github.com/stefanpenner/es6-promise/pull/135", date: "2015-08-10" },
]
const Contributes = () => {
  const parsedContributes = CONTRIBUTES.map((pr) => {
    const regex = /https:\/\/github.com\/[\w-]+\/([\w-]+)\/pull\/(\d+)/
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

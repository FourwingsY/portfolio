import { useRouter } from "next/router"
import { match } from "path-to-regexp"

import Link from "@components/Link"

import * as S from "./Header.style"

interface Props {
  href: string
  activeOnly?: boolean
  includeChildPath?: boolean
}
const NavLink: React.FC<Props> = ({ href, includeChildPath = false, activeOnly = false, children }) => {
  const router = useRouter()
  const matchFn = match(href, { end: !includeChildPath })
  const matched = Boolean(matchFn(router.pathname))

  // just want to use styling, not using as a hyperlink
  if (activeOnly) {
    return <S.NavLink match={matched}>{children}</S.NavLink>
  }
  return (
    <Link href={href}>
      <S.NavLink match={matched}>{children}</S.NavLink>
    </Link>
  )
}

export default NavLink

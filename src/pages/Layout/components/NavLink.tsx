import Link from "next/link"
import { useRouter } from "next/router"
import { match } from "path-to-regexp"

import * as S from "./Header.style"

interface Props {
  href: string
  activeOnly?: boolean
  includeChildPath?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}
const NavLink: React.FC<Props> = ({ href, includeChildPath = false, activeOnly = false, onClick, children }) => {
  const router = useRouter()
  const matchFn = match(href, { end: !includeChildPath })
  const matched = Boolean(matchFn(router.pathname))

  // just want to style active status,
  // not as a hyperlink
  if (activeOnly) {
    return (
      <S.NavLink match={matched} onClick={onClick}>
        {children}
      </S.NavLink>
    )
  }
  return (
    <Link href={href}>
      <S.NavLink match={matched}>{children}</S.NavLink>
    </Link>
  )
}

export default NavLink

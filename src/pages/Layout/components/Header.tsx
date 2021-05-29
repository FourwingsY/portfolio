import { useHideOnScrollDown } from "@hooks/useScroll"

import * as S from "./Header.style"
import NavLink from "./NavLink"

const Header = () => {
  const hide = useHideOnScrollDown({ minimumScroll: 200 })
  return (
    <S.Header hide={hide}>
      <S.NavGroup>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/showcase">Showcase</NavLink>
      </S.NavGroup>
    </S.Header>
  )
}

export default Header

import { useHideOnScrollDown } from "@hooks/useScroll"

import { ContentsWidth } from "@styles/adaptive"

import * as S from "./Header.style"
import NavLink from "./NavLink"

const Header = () => {
  const hide = useHideOnScrollDown({ minimumScroll: 200 })
  return (
    <S.Header hide={hide}>
      <ContentsWidth>
        <S.NavGroup>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/showcase" includeChildPath>
            Showcase
          </NavLink>
        </S.NavGroup>
      </ContentsWidth>
    </S.Header>
  )
}

export default Header

import { useHideOnScrollDown } from "@hooks/useScroll"

import Github from "@/components/icons/Github"
import LinkedIn from "@/components/icons/LinkedIn"

import * as S from "./Header.style"
import NavLink from "./NavLink"

const Header = () => {
  const hide = useHideOnScrollDown({ minimumScroll: 200, threshold: 30 })
  return (
    <S.Header hide={hide}>
      <S.Wrapper>
        <S.NavGroup>
          <NavLink href="/">YG</NavLink>
          <NavLink href="/showcase" includeChildPath>
            Showcase
          </NavLink>
          <NavLink href="/activity" includeChildPath>
            Activity
          </NavLink>
        </S.NavGroup>
        <S.NavGroup>
          <S.ExternalLink href="https://www.linkedin.com/in/fourwingsy/">
            <LinkedIn width={24} height={24} color="white" />
          </S.ExternalLink>
          <S.ExternalLink href="https://github.com/fourwingsy">
            <Github width={26} height={26} color="white" />
          </S.ExternalLink>
        </S.NavGroup>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header

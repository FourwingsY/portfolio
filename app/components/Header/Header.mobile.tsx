"use client"

import { useEffect, useState } from "react"

import { useHideOnScrollDown } from "@hooks/useScroll"

import Github from "@icons/Github"
import LinkedIn from "@icons/LinkedIn"

import * as S from "./Header.style"
import NavLink from "./NavLink"

const Header = () => {
  const [opened, setOpened] = useState(false)
  const hide = useHideOnScrollDown({ minimumScroll: 200, threshold: 30 })

  useEffect(() => {
    const lockScroll = (e: TouchEvent) => e.preventDefault()
    if (opened) {
      document.body.addEventListener("touchmove", lockScroll, { passive: false })
      document.body.style.overflow = "hidden"
      return () => {
        document.body.removeEventListener("touchmove", lockScroll)
        document.body.style.overflow = "initial"
      }
    }
  }, [opened])

  function toggleMenu() {
    setOpened(!opened)
  }

  return (
    <S.Header hide={hide}>
      <S.Wrapper>
        <S.NavGroup>
          <NavLink href="/">YG's portfolio</NavLink>
        </S.NavGroup>
        <S.NavGroup>
          <S.Menu opened={opened} onClick={toggleMenu}>
            <i />
          </S.Menu>
        </S.NavGroup>
      </S.Wrapper>
      <S.Drawer opened={opened}>
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/showcase" includeChildPath>
          Showcase
        </NavLink>
        <NavLink href="/activity" includeChildPath>
          Activity
        </NavLink>
        <S.DrawerFooter>
          <S.ExternalLink href="https://www.linkedin.com/in/fourwingsy/">
            <LinkedIn width={24} height={24} color="white" />
          </S.ExternalLink>
          <S.ExternalLink href="https://github.com/fourwingsy">
            <Github width={26} height={26} color="white" />
          </S.ExternalLink>
        </S.DrawerFooter>
      </S.Drawer>
    </S.Header>
  )
}

export default Header

import React, { useEffect } from "react"

import menu from "@/content/menu"
import ContactButton from "@/interface/Object/ContactButton"
import { CSS } from "@/theme/stitches.config"
import withDefaults from "@/utils/with-defaults"

import Logo from "./logo"
import StyledNav, {
  NavVariantsProps,
  StyledNavContainer,
  StyledNavList,
} from "./nav.styles"
import NavLink from "./navLink"
import SocialLink from "./socialLink"

interface Props {
  as?: keyof JSX.IntrinsicElements
  css?: CSS
  isHome?: boolean
  hasNotify?: boolean
}

const defaultProps = {}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type NavProps = Props &
  NavVariantsProps &
  NativeAttrs &
  typeof defaultProps

const Nav: React.FC<NavProps> = ({ css, ...props }) => {
  const hasNotify = props.hasNotify
  const isHome = props.isHome
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const isDetached = hasNotify ? scrollPosition > 40 : scrollPosition > 0

  useEffect(() => {
    setScrollPosition(
      (typeof window !== "undefined" && window.pageYOffset) || 0
    )
    window.addEventListener("scroll", onScroll.bind(this))

    return () => {
      window.removeEventListener("scroll", onScroll.bind(this))
    }
  }, [])

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset)
    })
  }

  const showBlur = !!isDetached || isHome

  return (
    <StyledNav css={css} {...props} id="nav__container">
      <StyledNavContainer isDetached={isDetached} showBlur={showBlur}>
        <div className="nav__wrapper">
          <div className="nav__logo">
            <Logo
              aria-label="Buchanan DevOps Logo"
              id="buchanan_devops_logo"
              title="Buchanan Devops"
            />
          </div>
          <StyledNavList>
            {menu.navLinks.map(item => (
              <NavLink
                key={item.title}
                display={item.short}
                href={item.href}
                title={item.title}
              />
            ))}
          </StyledNavList>
          <StyledNavList>
            {menu.socialLinks.slice(0, 3).map(item => (
              <SocialLink
                key={item.title}
                href={item.href}
                icon={item.icon}
                title={item.title}
              />
            ))}
            <ContactButton />
          </StyledNavList>
        </div>
      </StyledNavContainer>
    </StyledNav>
  )
}

Nav.toString = () => ".devui-nav"

const MemoNav = React.memo(Nav)

export default withDefaults(MemoNav, defaultProps)

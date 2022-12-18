import React from "react"

import menu from "@/content/menu"
import ContactButton from "@/interface/Object/ContactButton"
import { CSS } from "@/theme/stitches.config"
import withDefaults from "@/utils/with-defaults"

import Logo from "./logo"
import StyledNav, { NavVariantsProps, StyledNavList } from "./nav.styles"
import NavLink from "./navLink"
import SocialLink from "./socialLink"

interface Props {
  as?: keyof JSX.IntrinsicElements
  css?: CSS
}

const defaultProps = {}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type NavProps = Props &
  NavVariantsProps &
  NativeAttrs &
  typeof defaultProps

const Nav: React.FC<NavProps> = ({ css, ...props }) => {
  return (
    <StyledNav css={css} {...props}>
      <Logo
        aria-label="Buchanan DevOps Logo"
        id="buchanan_devops_logo"
        title="Buchanan Devops"
      />
      <StyledNavList>
        {menu.navLinks.map(item => (
          <li key={item.title}>
            <NavLink
              key={item.title}
              display={item.short}
              href={item.href}
              title={item.title}
            />
          </li>
        ))}
      </StyledNavList>
      <StyledNavList>
        {menu.socialLinks.map(item => (
          <SocialLink
            key={item.title}
            href={item.href}
            icon={item.icon}
            title={item.title}
          />
        ))}
        <ContactButton />
      </StyledNavList>
    </StyledNav>
  )
}

Nav.toString = () => ".devui-nav"

const MemoNav = React.memo(Nav)

export default withDefaults(MemoNav, defaultProps)

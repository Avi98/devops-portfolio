import React from "react"

import { CSS } from "@/theme/stitches.config"
import withDefaults from "@/utils/with-defaults"

import Logo from "./logo"
import StyledNav, { NavVariantsProps, StyledNavList } from "./nav.styles"

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

const Nav: React.FC<React.PropsWithChildren<NavProps>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <StyledNav css={css} {...props}>
      <Logo
        aria-label="Buchanan DevOps Logo"
        id="buchanan_devops_logo"
        title="Buchanan Devops"
      />
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  )
}

Nav.toString = () => ".devui-nav"

const MemoNav = React.memo(Nav)

export default withDefaults(MemoNav, defaultProps)

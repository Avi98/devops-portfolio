import { FC } from "react"

import { CSS } from "@/theme/stitches.config"

import StyledNavLink from "./navLink.styles"

interface Props {
  className?: string
  href?: string
  display?: string
  css?: CSS
  as?: keyof JSX.IntrinsicElements
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type NavLinkProps = Props & NativeAttrs

const NavLink: FC<NavLinkProps> = ({
  className,
  href,
  display,
  css,
  as,
  ...props
}) => {
  return (
    <StyledNavLink
      aria-label={display}
      css={css}
      id={display}
      {...props}
      as={as}
      className={className}
      href={href}
    >
      {display}
    </StyledNavLink>
  )
}

NavLink.toString = () => ".devui-nav-link"

export default NavLink

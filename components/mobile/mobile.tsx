import Link from "next/link"
import React from "react"

import menu from "@/content/menu"
import { CSS } from "@/theme/stitches.config"

import Logo from "../nav/logo"
import {
  StyledMenuButton,
  StyledMenuExpanded,
  StyledMenuToggle,
} from "./mobile.styles"
import {
  MobileHeader,
  MobileHeaderNavFirst,
  MobileHeaderWrapper,
  MobileMenuList,
  MobileMenuListLink,
  MobileMenuWrapper,
} from "./mobileMenu.styles"

interface Props {
  as?: keyof JSX.IntrinsicElements
  css?: CSS
  onClick?: () => void
}

const defaultProps = {}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type MobileMenuProps = Props & NativeAttrs & typeof defaultProps

const MobileMenu: React.FC<React.PropsWithChildren<MobileMenuProps>> = ({
  children,
  css,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MobileHeaderWrapper css={css} {...props}>
      <MobileHeader>
        <MobileHeaderNavFirst>
          <div>
            <Link href="/" title="Buchanan DevOps">
              <Logo
                css={{
                  justifyContent: "flex-start",
                }}
                title="Buchanan Devops"
              />
            </Link>
            <StyledMenuButton
              aria-label="Open Mobile Menu"
              id="open__mobile-menu"
              onClick={handleClick}
            >
              {isOpen ? (
                <StyledMenuExpanded css={{ justifyContent: "center" }} />
              ) : (
                <StyledMenuToggle css={{ justifyContent: "center" }} />
              )}
            </StyledMenuButton>
            {isOpen ? (
              <MobileMenuWrapper>
                <MobileMenuList>
                  {menu.navLinks.map(item => (
                    <MobileMenuListLink
                      key={item.title}
                      href={item.href}
                      title={item.title}
                    >
                      <li>{item.short}</li>
                    </MobileMenuListLink>
                  ))}
                </MobileMenuList>
              </MobileMenuWrapper>
            ) : null}
          </div>
        </MobileHeaderNavFirst>
      </MobileHeader>
    </MobileHeaderWrapper>
  )
}

export default MobileMenu

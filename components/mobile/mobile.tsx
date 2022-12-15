import React from "react"

import { CSS } from "@/theme/stitches.config"

import { Logo } from ".."
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
            <Logo
              css={{
                justifyContent: "flex-start",
              }}
            />
            <StyledMenuButton onClick={handleClick}>
              {isOpen ? (
                <StyledMenuExpanded css={{ justifyContent: "center" }} />
              ) : (
                <StyledMenuToggle css={{ justifyContent: "center" }} />
              )}
            </StyledMenuButton>
            {isOpen ? (
              <MobileMenuWrapper>
                <MobileMenuList>{children}</MobileMenuList>
              </MobileMenuWrapper>
            ) : null}
          </div>
        </MobileHeaderNavFirst>
      </MobileHeader>
    </MobileHeaderWrapper>
  )
}

export default MobileMenu

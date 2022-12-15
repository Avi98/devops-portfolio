import { FC } from "react"

import clsx from "clsx"

import { MobileMenu, Nav, NavLink } from "@/components"
import {
  MobileMenuList,
  MobileMenuListLink,
  MobileMenuWrapper,
} from "@/components/mobile/mobileMenu.styles"
import menu from "@/content/menu"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Props {
  className?: string
}

const PageHeader: FC<Props> = ({ className }) => {
  const isMobile = useMediaQuery(754)

  return (
    <>
      {isMobile ? (
        <MobileMenu>
          <MobileMenuWrapper>
            <MobileMenuList>
              {menu.navLinks.map(item => (
                <MobileMenuListLink href={item.href}>
                  <li>{item.display}</li>
                </MobileMenuListLink>
              ))}
            </MobileMenuList>
          </MobileMenuWrapper>
        </MobileMenu>
      ) : (
        <header className={clsx("page-header", className)}>
          <Nav>
            {menu.navLinks.map(item => (
              <NavLink
                key={item.display}
                href={item.href}
                display={item.display}
              />
            ))}
          </Nav>
        </header>
      )}
    </>
  )
}

export default PageHeader

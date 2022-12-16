import { FC } from "react"

import clsx from "clsx"

import { Container, MobileMenu, Nav, NavLink } from "@/components"
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
      <Container>
        {isMobile ? (
          <MobileMenu>
            <MobileMenuWrapper>
              <MobileMenuList>
                {menu.navLinks.map(item => (
                  <MobileMenuListLink
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    <li>{item.short}</li>
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
                  key={item.title}
                  href={item.href}
                  display={item.short}
                  title={item.title}
                />
              ))}
            </Nav>
          </header>
        )}
      </Container>
    </>
  )
}

export default PageHeader

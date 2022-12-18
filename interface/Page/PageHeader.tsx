import { FC } from "react"

import clsx from "clsx"

import { Container, MobileMenu, Nav } from "@/components"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Props {
  className?: string
}

const PageHeader: FC<Props> = ({ className }) => {
  const isMobile = useMediaQuery(851)

  return (
    <>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <header className={clsx("page-header", className)}>
          <Nav />
        </header>
      )}
    </>
  )
}

export default PageHeader

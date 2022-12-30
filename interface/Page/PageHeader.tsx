import dynamic from "next/dynamic"
import { FC } from "react"

import clsx from "clsx"

import { useMediaQuery } from "@/hooks/use-media-query"

const Nav = dynamic(() => import("@/components/nav"), {
  ssr: false,
})

const MobileMenu = dynamic(() => import("@/components/mobile"), {
  ssr: false,
})

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

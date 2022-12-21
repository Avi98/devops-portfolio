import { FC } from "react"

import clsx from "clsx"

import { Section } from "@/components"
import { CSS } from "@/theme"

interface Props {
  className?: string
  children: React.ReactNode
  css?: CSS
}

const ContentSection: FC<Props> = ({ className, children, css }: Props) => {
  return (
    <Section css={css}>
      <div className={clsx(`content-section`, className)}>{children}</div>
    </Section>
  )
}

export default ContentSection

import { FC, ReactNode } from "react"

import { CTA, CTAContainer, CTAMeta, CTASubtitle, CTATitle } from "./cta.styles"

interface Props {
  title: string
  subtitle: string
  children?: ReactNode
}

const Cta: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <CTA>
      <div aria-hidden="true" className="cta__radial" />
      <CTAContainer>
        <CTAMeta>
          <CTATitle>{title}</CTATitle>
          <CTASubtitle>{subtitle}</CTASubtitle>
        </CTAMeta>
        {children}
      </CTAContainer>
    </CTA>
  )
}

export default Cta

import { FC } from "react"

import { CSS } from "@/theme/stitches.config"

import { StyledFaq, StyledFaqContainer, StyledFaqTitle } from "./faq.styles"

interface Props {
  className?: string
  children: React.ReactNode
  css?: CSS
  title?: string
}

const Faq: FC<Props> = ({ className, children, css, title }) => {
  return (
    <StyledFaq className={className} css={css}>
      <StyledFaqContainer>
        <StyledFaqTitle>{title}</StyledFaqTitle>
        {children}
      </StyledFaqContainer>
    </StyledFaq>
  )
}

Faq.toString = () => ".devui-faq"

export default Faq

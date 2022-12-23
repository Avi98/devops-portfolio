import { FC } from "react"

import { CSS } from "@/theme/stitches.config"
import { FaqItemProps } from "@/types/faqItem"

import { StyledText } from "../text"
import {
  StyledAcceptedAnswer,
  StyledFaqDetails,
  StyledFaqItem,
  StyledFaqName,
  StyledSummary,
} from "./faq.styles"

interface Props {
  className?: string
  css?: CSS
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>

export type FaqProps = Props & NativeAttrs & FaqItemProps

const FaqItem: FC<FaqProps> = ({ className, children, css, ...props }) => {
  return (
    <StyledFaqItem className={className} css={css} id={props.name}>
      <StyledFaqDetails>
        <StyledSummary>
          <StyledFaqName>{props.name}</StyledFaqName>
        </StyledSummary>
      </StyledFaqDetails>
      <StyledAcceptedAnswer>
        <StyledText>{props.acceptedAnswer.text}</StyledText>
      </StyledAcceptedAnswer>
    </StyledFaqItem>
  )
}

FaqItem.toString = () => ".devui-faq--item"

export default FaqItem

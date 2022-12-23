import { styled } from "@/theme/stitches.config"

import { Icon } from "../icons"

export const StyledFaq = styled("section", {
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
})

export const StyledFaqContainer = styled("div", {
  maxWidth: "1000px",
  margin: "0 auto",
})

export const StyledFaqTitle = styled("h2", {
  textAlign: "center",
})

export const StyledFaqItem = styled("div", {})

export const StyledFaqDetails = styled("details", {})

export const StyledSummary = styled("summary", {})

export const StyledFaqName = styled("h3", {})

export const StyledAcceptedAnswer = styled("div", {})

export const StyledText = styled("p", {})

export const StyledIcon = styled(Icon, {})

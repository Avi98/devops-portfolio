import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledSummaryList = styled("ul", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "96px",
  "@smMax": {
    flexDirection: "column",
    textAlign: "center",
  },
})

export const StyledSummaryItem = styled("li", {
  "@smMax": {
    marginBottom: "64px",
  },
  maxWidth: "370px",
})

export const StyledSummaryItemIcon = styled("div", {})

export const StyledSummaryItemTitle = styled("h2", {
  fontSize: "1.5rem",
  fontWeight: "600",
  lineHeight: "2rem",
  letterSpacing: "-.029375rem",
})

export const StyledSummaryItemDescription = styled("p", {
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "1.5rem",
  color: "$accents7",
})

export type SummaryListProps = VariantProps<typeof StyledSummaryList>

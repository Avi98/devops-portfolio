import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledCard = styled("div", {
  background: "#FFFFFF",
  backgroundPosition: "61% -330px",
  backgroundRepeat: "no-repeat",
  border: "1px solid rgba(228, 202, 255, 0.1)",
  borderRadius: "12px",
  padding: "20px",
  flex: "1 1",
  "&:hover": {
    outline: "webkit-focus-ring-color auto 1px",
    borderColor: "rgba(228, 202, 255, 0.5)",
    cursor: "pointer",
  },
})

export const StyledIconWrapper = styled("div", {
  marginBottom: "20px",
})

export const StyledIcon = styled("img", {
  width: "48px",
  height: "48px",
})

export const StyledTitle = styled("div", {
  fontSize: "1.25rem",
  letterSpacing: "-0.020625rem",
  fontWeight: 700,
  lineHeight: "1.5rem",
  marginBottom: "8px",
})

export const StyledDescription = styled("p", {
  display: "block",
  margin: "0px",
  color: "#888888",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "1.5rem",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
})

export type CardVariantsProps = VariantProps<typeof StyledCard>

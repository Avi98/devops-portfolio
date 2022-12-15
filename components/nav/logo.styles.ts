import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledLogo = styled("svg", {
  verticalAlign: "middle",
  fill: "currentColor",
  cursor: "pointer",
})

export type LogoVariantsProps = VariantProps<typeof StyledLogo>

export default StyledLogo

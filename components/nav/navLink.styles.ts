import Link from "next/link"

import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledNavLink = styled(Link, {
  textDecoration: "none",
  position: "sticky",
  color: "$text",
  verticalAlign: "middle",
  pt: "5px",
  px: "$sm",
  "&:hover": {
    textDecoration: "none",
    color: "$neutralLightContrast",
  },
})

export type NavLinkVariantsProps = VariantProps<typeof StyledNavLink>

export default StyledNavLink

import Link from "next/link"

import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledNavLink = styled("li", Link, {
  display: "flex",
  textDecoration: "none",
  position: "sticky",
  color: "$text",
  alignItems: "center",
  marginBottom: "0px",
  outline: "none",
  px: "$sm",
  "&:hover": {
    textDecoration: "none",
    color: "$neutralLightContrast",
  },
})

export type NavLinkVariantsProps = VariantProps<typeof StyledNavLink>

export default StyledNavLink

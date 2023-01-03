import Link from "next/link"

import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledGradientCardLink = styled(Link, {
  borderWidth: "1px",
  arrowColor: "$accents4",
  width: "100%",
  height: "100%",
  display: "inline-block",
  position: "relative",
  borderRadius: "12px",
  border: "1px solid transparent",
  textDecoration: "none",
  color: "$foreground",
  background:
    "linear-gradient(139.34deg,rgba(255,0,128,.15) 9.71%,rgba(0,112,243,.15) 90.27%)",
  "&::before": {
    content: "''",
    position: "absolute",
    display: "block",
    zIndex: -1,
    inset: 0,
    borderRadius: "inherit",
    overflow: "hidden",
    margin: "calc(-1 * $borderWidth)",
    background: "$accents2",
  },
  "& .card_gradient": {
    margin: "calc(-1 * $borderWidth)",
    background: "linear-gradient(139.34deg,#0070f3 9.71%,#ff0080 90.27%)",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
})

export const StyledGradientCard = styled("div", {
  position: "relative",
  display: "grid",
  borderRadius: "12px",
  textDecoration: "none",
  color: "$text",
  userSelect: "none",
  "&::after": {
    content: "''",
    position: "absolute",
    display: "block",
    zIndex: -1,
    inset: 0,
    borderRadius: "inherit",
    overflow: "hidden",
  },
  variants: {
    size: {
      "x-small": {},
      small: {
        height: "140px",
        justifyItems: "center",
        alignItems: "center",
        alignContent: "space-evenly",
      },
      medium: {},
      large: {},
    },
  },
})

export const StyledGradientGrid = styled("div", {
  display: "grid",
  gridGap: "24px",
  gap: "24px",
  variants: {
    size: {
      "x-small": {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      },
      small: {
        gridTemplateColumns: "1fr 1fr 1fr",
        "@smMax": {
          gridTemplateColumns: "1fr 1fr",
        },
      },
      medium: {
        gridTemplateColumns: "1fr 1fr",
      },
      large: {
        gridTemplateColumns: "1fr",
      },
    },
  },
})

export type StyledGradientCardProps = VariantProps<typeof StyledGradientCard>

import Image from "next/image"

import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledInfographic = styled("section", {
  display: "flex",
  marginTop: "96px",
  alignItems: "center",
  "@smMax": {
    flexDirection: "column",
  },
})

export const StyledInfographicImage = styled(Image, {
  width: "100%",
  height: "auto",
})

export const StyledInfographicContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "0 20px",
  "@smMax": {
    alignItems: "center",
  },
  variants: {
    position: {
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
        "@smMax": {
          alignItems: "center",
        },
      },
    },
  },
  defaultVariants: {
    position: "left",
  },
})

export const StyledInfographicTitle = styled("h3", {
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: "bold",
  color: "$text",
  margin: "0 0 20px 0",
  "@smMax": {
    fontSize: "24px",
    lineHeight: "32px",
    margin: "0 0 16px 0",
  },
})

export const StyledInfographicDescription = styled("p", {
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "$accents7",
  fontWeight: "500",
  margin: "0 0 20px 0",
})

export type StyledInfographicProps = VariantProps<typeof StyledInfographic>

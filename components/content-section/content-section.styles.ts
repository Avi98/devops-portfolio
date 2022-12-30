import Image from "next/image"

import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledContentSection = styled("section", {
  display: "flex",
  textAlign: "left",
  alignItems: "center",
  "@smMax": {
    textAlign: "center",
  },
  variants: {
    position: {
      left: {
        flexDirection: "row",
        marginTop: "143px",
        "& .content-section__image": {
          alignSelf: "flex-end",
        },
        "@smMax": {
          flexDirection: "column",
          "& .content-section__image": {
            alignSelf: "center",
          },
        },
      },
      center: {},
      right: {
        flexDirection: "row-reverse",
        marginTop: "96px",
        "& .content-section__image": {
          alignSelf: "flex-start",
        },
        "@smMax": {
          flexDirection: "column",
          "& .content-section__image": {
            alignSelf: "center",
          },
        },
      },
    },
  },
  defaultVariant: "left",
})

export const StyledContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "0 20px",
  "@smMax": {
    alignItems: "center",
  },
})

export const StyledContentTitle = styled("h3", {
  fontSize: "2.5rem",
  lineHeight: "3.5rem",
  letterSpacing: "-.058125rem",
})

export const StyledContentText = styled("p", {
  color: "$gray700",
  lineHeight: "2rem",
  fontSize: "1.25rem",
  letterSpacing: "-.020625rem",
})

export const StyledContentImage = styled(Image, {
  width: "90%",
  height: "auto",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "8px",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  "@smMax": {
    marginTop: "40px",
  },
})

export type ContentSectionProps = VariantProps<typeof StyledContentSection>

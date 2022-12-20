import Image from "next/image"

import { styled } from "@/theme"

export const StyledSection = styled("section", {
  width: "100%",
  position: "relative",
  overflow: "hidden",
  background: "$background",
  paddingtop: "96px",
  variants: {
    border: {
      top: {
        "& .section__styles--top-border": {
          display: "flex",
          position: "absolute",
          zIndex: "1",
          top: "-400px",
          left: "50%",
          transform: "translate3d(-50%,0,0)",
          width: "100%",
        },
        "& .section__styles--top-border-left": {
          background: "linear-gradient(180deg, #e52983, #8430e3)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(120px,0,0)",
        },
        "& .section__styles--top-border-right": {
          background: "linear-gradient(180deg, #8430e3, #e52983)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(-120px,0,0)",
        },
      },
      bottom: {
        "& .section__styles--bottom-border": {
          display: "flex",
          position: "absolute",
          zIndex: "-1",
          top: "unset",
          left: "50%",
          transform: "translate3d(-50%,0,0)",
          width: "100%",
        },
        "& .section__styles--bottom-border-left": {
          background: "linear-gradient(180deg, #e52983, #8430e3)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(120px,0,0)",
        },
        "& .section__styles--bottom-border-right": {
          background: "linear-gradient(180deg, #8430e3, #e52983)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(-120px,0,0)",
        },
      },
    },
  },
})

export const StyledSectionTitle = styled("h3", {})

export const StyledSectionSubtitle = styled("h4", {})

export const StyledSectionDescription = styled("p", {})

export const StyledSectionContent = styled("div", {})

export const StyledSectionImage = styled(Image, {
  width: "100%",
  height: "100%",
})

export const StyledSectionButton = styled("button", {})

export const StyledSectionBackground = styled("span", {})

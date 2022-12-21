import { styled } from "@/theme/stitches.config"
import { pulse } from "@/utils/animations"

import { StyledButton } from "../button"

export const DisplayContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "stretch",
  justifyContent: "flex-start",
  minWidth: "1px",
  maxWidth: "100%",
})

export const Box = styled("div", {
  // Reset
  boxSizing: "border-box",
})

export const ButtonGradientSpan = styled("span", {
  color: "$foreground",
  content: "",
  height: "100%",
  width: "100%",
  zIndex: "-2",
  boxShadow: "0 4px 4px 0 #00000040",
  "&:before": {
    content: "",
    border: "12px solid transparent",
    backgroundClip: "padding-box",
    filter: "blur(36px)",
    position: "absolute",
    zIndex: "-1",
  },
  variants: {
    gradient: {
      default: {
        backgroundImage:
          "linear-gradient(165deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)",
      },

      seo: {
        backgroundImage: "$seoGradient",
      },
    },
  },
})

export const StyledCardBlur = styled("div", {
  background: "$accents1",
  boxShadow: "$sm",
  borderRadius: "$lg",
  display: "flex",
  flexDirection: "column",
  p: "$8",
  bg: "$backgroundContrast",
  "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
    bf: "saturate(180%) blur(14px)",
    bg: "rgba(255, 255, 255, 0.05)",
  },
})

export const Title = styled("h1", {
  display: "inline",
  fontWeight: "$bold",
  color: "$text",
  lh: "1.2",
  fs: "2.5rem",
  mb: 0,
  "@sm": {
    fs: "3rem",
  },
  "@lg": {
    fs: "3.5rem",
  },
  "&::selection": {
    WebkitTextFillColor: "$colors$text",
  },
  variants: {
    color: {
      violet: {
        textGradient: "180deg, #FF1CF7 25%, #b249f8 100%",
      },
      warning: {
        textGradient: "180deg, #f36534 25%, #F69F27 100%",
      },
      blue: {
        textGradient: "180deg, #5EA2EF 25%, #0072F5 100%",
      },
      cyan: {
        textGradient: "180deg, #00b7fa 25%, #01cfea 100%",
      },
      green: {
        textGradient: "180deg, #6FEE8D 25%, #17c964 100%",
      },
      pink: {
        textGradient: "180deg, #FF4ECD 25%, #F21361 100%",
      },
    },
    fullWidth: {
      true: {
        display: "block",
        width: "100%",
      },
    },
  },
})

export const Subtitle = styled("p", {
  pl: "$1",
  fs: "$xl",
  fontWeight: "$medium",
  color: "$accents7",
  display: "block",
  mw: "100%",
  width: "100%",
  "@sm": {
    mw: "50%",
  },
})

export const PageNav = styled(StyledButton, {
  display: "flex",
  background: "none",
  position: "absolute",
  verticalAlign: "middle",
  variants: {
    selector: {
      left: {
        justifyContent: "flex-start",
        top: "35%",
        left: "0%",
        minHeight: "25%",
      },
      right: {
        justifyContent: "flex-end",
        top: "35%",
        right: "0%",
        bottom: "5%",
        minHeight: "25%",
      },
    },
  },
  "@mdMax": {},
  "& .devui-button-icon": {
    mr: "$2",
  },
  "& .devui-button-icon svg": {
    transition: "$default",
    fill: "#13181A",
  },
  "&:hover": {
    "& .devui-button-icon svg": {
      animation: `${pulse} 1s infinite`,
    },
  },
  bg: "rgba(51, 51,51,0.1)",
  "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
    bf: "saturate(180%) blur(1px)",
  },
})

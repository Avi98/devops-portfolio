import { styled } from "@/theme/stitches.config"

export const DisplayContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "stretch",
  justifyContent: "flex-start",
  minWidth: "1px",
  maxWidth: "100%",
})

export const HeroButton = styled("button", {
  borderRadius: "5px",
  fontWeight: "500",
  fs: "1rem",
  px: "14px", // 16px
  py: "10px", // 12px
  maxWidth: "100%",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transitionProperty:
    "border-color, background-color, color, transform, box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease",
  variants: {
    style: {
      default: {
        border: "1px solid $foreground",
        backgroundColor: "$foreground",
        color: "$background",
        "&:hover": {
          backgroundColor: "$background",
          color: "$foreground",
        },
      },
      gradient: {
        backgroundColor: "$background",
        color: "$text",
        position: "absolute",
        cursor: "pointer",
        "&::before": {
          content: "''",
          display: "block",
          backgroundImage:
            "linear-gradient(165deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)",
          backgroundImageRepeat: "no-repeat",
          position: "absolute",
          top: "-3px",
          left: "-3px",
          width: "calc(100% + 6px)",
          height: "calc(100% + 6px)",
          borderRadius: "inherit",
          zIndex: -1,
        },
        "&:hover": {
          backgroundColor: "$foreground",
          color: "$background",
        },
      },
      tertiary: {
        backgroundColor: "$tertiary",
        color: "$white",
        "&:hover": {
          backgroundColor: "$tertiaryDark",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$primary",
        "&:hover": {
          backgroundColor: "$primaryLight",
        },
      },
    },
    animation: {
      gradient: {},
    },
    size: {
      small: { fontSize: "$sm", padding: "$sm" },
      medium: { fontSize: "$md", padding: "$md" },
      large: { fontSize: "$lg", padding: "$lg" },
    },
  },
})

export const ButtonGradientSpan = styled("span", {
  backgroundImage:
    "linear-gradient(165deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)",
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
});

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
});

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
});
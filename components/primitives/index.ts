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

export const Button = styled("button", {
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

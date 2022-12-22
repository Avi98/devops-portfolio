import { keyframes, styled, VariantProps } from "@/theme/stitches.config"

export const animatedText = keyframes({
  "100%": {
    backgroundPosition: "-200% center",
  },
})

const animatedBorder = keyframes({
  "100%": {
    transform: "scaleX(0.95)",
    backgroundPosition: "-200% center",
  },
  "50%": {
    transform: "scaleX(1.05)",
  },
  "0%": {
    transform: "scaleX(.95)",
  },
})

export const animatedGradient = keyframes({
  "0%": {
    backgroundPosition: "0% 50%",
  },
  "50%": {
    backgroundPosition: "100% 50%",
  },
  "100%": {
    backgroundPosition: "0% 50%",
  },
})

export const animatedGrowBorder = keyframes({
  "100%": {
    transform: "scaleX(0.95)",
    backgroundPosition: "-200% center",
  },
  "50%": {
    transform: "scaleX(1.05)",
  },
  "0%": {
    transform: "scaleX(.95)",
  },
})

export const AnimationHelper = styled("div", {
  animationDuration: ".5s",
  easing: "cubic-bezier(0.4,0.01,0.165,0.99)",
  animationDelay: "0s",
})

export const StyledHero = styled("section", {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  "@xsMax": {
    height: "calc(100vh)",
  },
  alignItems: "center",
  textAlign: "-webkit-center",
  jusitfy: "space-between",
  className: "hero__container",
  "& .gradient__background": {
    position: "absolute",
    overflow: "hidden",
    filter: "blur(36px)",
    userSelect: "none",
    pointerEvents: "none",
    width: "226px",
    height: "40px",
    animation: `4s ease 0s infinite normal none running ${animatedGradient}`,
  },
  "& .gradient__background--seo": {
    background: "$seoGradient",
    opacity: 0.9,
  },
  "& .gradient__background--web-design": {
    background: "$webGradient",
    opacity: 0.9,
  },
  "& .gradient__background--app-development": {
    background: "$appGradient",
    opacity: 0.9,
  },
})

export const StyledHeroImg = styled("img", {
  height: "70px",
  "@xsMax": {
    height: "40px",
  },
  textAlign: "-webkit-center",
})

export const StyledGradientBorder = styled("span", {
  $$gradient:
    "linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)",
  borderImage: "$$gradient 1",
  background: "$$gradient",
  borderImageSlice: "1",
  borderImageWidth: "5px",
  borderImageOutset: "0",
  borderImageRepeat: "stretch",
  backgroundSize: "200% 100%",
  backgroundPosition: "0 0",
  backgroundClip: "text",
  opacity: "0.8",
  filter: "blur(2px)",
  overflow: "visible",
  animation: `5s linear 0s infinite normal forwards running ${animatedBorder}`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
})

export const StyledHeroTitle = styled("h1", {
  fs: "5rem",
  zIndex: "1",
  fontWeight: "bold",
  marginBottom: "1rem",
  textAlign: "center",
  "@xsMax": {
    fontSize: "2.7rem",
  },
  variants: {
    gradientBorder: {
      true: {
        position: "relative",
      },
      false: {},
    },
  },
  defaultVariants: {
    gradientBorder: "false",
  },
})

export const StyledHeroSubtitle = styled("div", {
  color: "transparent",
  backgroundClip: "text",
  mt: "-50px",
  fontSize: "7rem",
  fontWeight: "$extrabold",
  letterSpacing: "-0.05em",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@xsMax": {
    mt: "-20px",
    fontSize: "3.5rem",
  },
  variants: {
    gradient: {
      "web-design": {
        $$colorA: "#007cf0",
        $$colorB: "#00dfd8",
        $$gradient: "linear-gradient(90deg, $$colorA 0%, $$colorB 100%)",
        backgroundImage: "$$gradient",
      },
      "app-development": {
        $$colorA: "#9A1FB8",
        $$colorB: "#FF0080",
        $$gradient: "linear-gradient(90deg, $$colorA 0%, $$colorB 100%)",
        backgroundImage: "$$gradient",
      },
      seo: {
        $$colorA: "#ff4d4d",
        $$colorB: "#f9cb28",
        $$gradient: "linear-gradient(90deg, $$colorA 0%, $$colorB 100%)",
        backgroundImage: "$$gradient",
      },
      landing: {
        $$gradient:
          "linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)",
        backgroundImage: "$$gradient",
        backgroundSize: "200%",
        animation: `10s linear 0s infinite normal forwards running ${animatedText}`,
      },
      default: {
        $$colorA: "#007cf0",
        $$colorB: "#00dfd8",
        $$gradient: "linear-gradient(90deg, $$colorA 0%, $$colorB 100%)",
        backgroundImage: "$$gradient",
        animation: `10s linear 0s infinite normal forwards running ${animatedText}`,
      },
      legal: {
        $$colorA: "rgb(225, 29, 72)",
        $$colorB: "rgb(157, 23, 77)",
        $$colorC: "rgb(55, 48, 163)",
        $$gradient:
          "radial-gradient(at right center, $$colorA, $$colorB, $$colorC)",
        backgroundImage: "$$gradient",
        animation: `10s linear 0s infinite normal forwards running ${animatedText}`,
      },
      marketing: {},
      work: {},
    },
  },
})

export const StyledHeroDescription = styled("p", {
  fs: "1.5rem",
  lh: "1.6em !important",
  color: "$gray800",
  fontWeight: "400",
  margin: "0 0 40px",
  textAlign: "center",
  maxWidth: "780px",
  letterSpacing: "-.02em",
  textRendering: "optimizeLegibility",
  "@smMax": {
    fontSize: "1.25rem",
    pl: "calc(2 * var(--devui-space-sm))",
    pr: "calc(2 * var(--devui-space-sm))",
  },
})

export const HeroButtons = styled("div", {
  width: "500px",
  maxWidth: "100%",
  placeContent: "center",
  "@xsMax": {
    width: "400px",
  },
})

export const HeroButtonsList = styled("div", {
  display: "flex",
  fw: "wrap",
})

export const HeroButtonsListItem = styled("div", {
  padding: "var(--devui-space-sm)",
  flexGrow: 0,
  flexBasis: "50%",
  "@xsMax": {
    flexBasis: "100%",
  },
})
export const HeroButtonGradientWrapper = styled("div", {
  borderRadius: "5px",
  content: "''",
  height: "100%",
  width: "100%",
  position: "absolute",
  zIndex: "-1",
  variants: {
    style: {
      seo: {
        $$colorA: "#ff4d4d",
        $$colorB: "#f9cb28",
        "&::before": {
          display: "block",
          opacity: "1",
          $$colorA: "#ff4d4d",
          $$colorB: "#f9cb28",
          background: "linear-gradient(165deg, $$colorA, $$colorB)",
          backgroundSize: "200%",
          border: "12px solid transparent",
          backgroundClip: "padding-box",
          filter: "blur(36px)",
          height: "100%",
          position: "absolute",
          width: "100%",
          zIndex: "-2",
        },
      },
    },
  },
})
export const HeroButton = styled("button", {
  borderRadius: "5px",
  fontWeight: "500",
  fs: "1rem",
  px: "14px", // 16px
  py: "10px", // 12px
  maxWidth: "100%",
  border: "none",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transitionProperty: " background-color, color, transform, box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease",
  "&:hover": {
    backgroundColor: "rgb(51 51 51 / 10%)",
    color: "$background",
  },
  variants: {
    style: {
      default: {
        border: "1px solid rgba(228, 202, 255, 0.2)",
        backgroundColor: "$background",
        color: "$text",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgb(51 51 51 / 70%)",
          border: "1px solid rgba(228, 202, 255, 0.5)",
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
            "linear-gradient(170deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)",
          backgroundImageRepeat: "no-repeat",
          position: "absolute",
          width: "calc(100% + 2px)",
          height: "calc(100% + 2px)",
          borderRadius: "inherit",
          zIndex: -1,
        },
        "&:hover": {
          backgroundColor: "$foreground",
          color: "$background",
        },
      },
      seo: {
        backgroundColor: "$background",
        color: "$text",
        position: "absolute",
        cursor: "pointer",
        "&::before": {
          content: "''",
          display: "block",
          $$colorA: "#ff4d4d",
          $$colorB: "#f9cb28",
          background: "linear-gradient(165deg, $$colorA, $$colorB)",
          backgroundImageRepeat: "no-repeat",
          backgroundSize: "200%",
          position: "absolute",
          width: "calc(100% + 2px)",
          height: "calc(100% + 2px)",
          borderRadius: "inherit",
          zIndex: -1,
          animation: `4s ease 0s infinite normal none running ${animatedGradient}`,
        },
      },
      "web-design": {
        backgroundColor: "$background",
        color: "$text",
        position: "absolute",
        cursor: "pointer",
        "&::before": {
          content: "''",
          display: "block",
          $$colorA: "#007cf0",
          $$colorB: "#00dfd8",
          backgroundImage: "linear-gradient(165deg, $$colorA, $$colorB )",
          backgroundImageRepeat: "no-repeat",
          position: "absolute",
          width: "calc(100% + 2px)",
          height: "calc(100% + 2px)",
          borderRadius: "inherit",
          zIndex: -1,
          animation: `4s ease 0s infinite normal none running ${animatedGradient}`,
        },
      },
      "app-development": {
        backgroundColor: "$background",
        color: "$text",
        position: "absolute",
        cursor: "pointer",
        "&::before": {
          content: "''",
          display: "block",
          $$colorA: "#9A1FB8",
          $$colorB: "#FF0080",
          backgroundImage: "linear-gradient(165deg, $$colorA , $$colorB)",
          backgroundImageRepeat: "no-repeat",
          borderImage: "linear-gradient(165deg, $$colorA , $$colorB)",
          borderWidth: "12px solid",
          position: "absolute",
          width: "calc(100% + 2px)",
          height: "calc(100% + 2px)",
          borderRadius: "inherit",
          zIndex: -1,
          animation: `4s ease 0s infinite normal none running ${animatedGradient}`,
        },
      },

      legal: {
        backgroundColor: "$background",
        color: "$text",
        position: "absolute",
        cursor: "pointer",
        "&::before": {
          content: "''",
          display: "block",
          $$colorA: "rgb(225, 29, 72)",
          $$colorB: "rgb(157, 23, 77)",
          $$colorC: "rgb(55, 48, 163)",
          backgroundImage:
            "radial-gradient(at right center, $$colorA, $$colorB, $$colorC)",
          backgroundImageRepeat: "no-repeat",
          position: "absolute",
          width: "calc(100% + 2px)",
          height: "calc(100% + 2px)",
          borderRadius: "inherit",
          zIndex: -1,
        },
      },
    },
    size: {
      small: { fontSize: "$sm", padding: "$sm" },
      medium: { fontSize: "$md", padding: "$md" },
      large: { fontSize: "$lg", padding: "$lg" },
    },
  },
})

export type HeroVariantsProps = VariantProps<typeof StyledHero>

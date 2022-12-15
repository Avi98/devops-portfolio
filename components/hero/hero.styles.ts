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
  position: "relative",
  mt: "80px",
  height: "100vh",
  "@xsMax": {
    height: "calc(100vh)",
  },
  alignItems: "center",
  textAlign: "-webkit-center",
  jusitfy: "space-between",
  className: "hero__container",
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
  width: "400px",
  maxWidth: "100%",
  placeContent: "center",
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

export type HeroVariantsProps = VariantProps<typeof StyledHero>

import { styled } from "@/theme/stitches.config"

export const CTA = styled("section", {
  width: "100vw",
  height: "100vh",
  position: "relative",
  maxHeight: "350px",
  overflow: "hidden",
  backgroundImage: "url('/brand/grid.svg')",
  textAlign: "center",
  "&::before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "30vh",
    left: 0,
    maxHeight: "400px",
    pointerEvents: "none",
  },
  "&::after": {
    content: "''",
    bottom: 0,
    background: "linear-gradient(0deg,#000,transparent)",
  },
  "& .cta__radial": {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    background: "radial-gradient(circle,transparent 0,#000 100%)",
    pointerEvents: "none",
  },
})

export const CTAContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  position: "relative",
  "&::after": {
    content: "''",
    background:
      "radial-gradient(50% 50% at 50% 50%, rgb(45 25 125 / 41%) 0px, rgba(255, 255, 255, 0) 100%)",
    opacity: 0.8,
    transform: "rotate(-45deg)",
    width: "150%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    pointerEvents: "none",
  },
})

export const CTAMeta = styled("div", {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
})

export const CTATitle = styled("h2", {
  fontSize: "2.5rem",
  fontWeight: 600,
  lineHeight: "3.5rem",
  color: "#fafafa",
})

export const CTASubtitle = styled("p", {
  maxWidth: "500px",
})

export const CTAButton = styled("a", {})

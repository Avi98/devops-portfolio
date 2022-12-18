import { styled } from "@/theme/stitches.config"

import Link from "../link"
import Text from "../text"

export const HeroTitle = styled("span", {
  justifyContent: "center",
  "@sm": {
    display: "flex",
  },
})

export const SectionHeader = styled("div", {
  justifyContent: "center",
  textAlign: "-webkit-center",
})

export const SectionBody = styled("div", {
  "& p": {
    color: "#888",
    fontSize: "16px",
  },
})

export const SectionFeatures = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
})

export const SectionFeature = styled("div", {
  "& h6": {
    display: "flex",
  },
  "& p": {
    display: "flex",
  },
})

export const ExploreLabel = styled("div", Text, {
  justifyContent: "center",
  textAlign: "center",
  fontSize: ".75rem",
  letterSpacing: ".2rem",
  fontWeight: "500",
})

export const PathLine = styled("div", {
  height: "100px",
  minHeight: "100px",
  width: "1px",
})

export const HeroSpan = styled("div", {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  zIndex: "1",
  textAlign: "center",
  fontSize: "4rem",
  lineHeight: "1",
  fontWeight: "800",
  letterSpacing: "-0.06em",
  paddingBottom: "1rem",
  "@xsMax": {
    fontSize: "4rem",
  },
})

export const SectionTitle = styled("h5", {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  zIndex: "1",
  fontSize: "2rem",
  fontWeight: "700",
  letterSpacing: "-0.05em",
  "@xsMax": {
    fontSize: "2.25rem",
  },
})

export const SectionSubTitle = styled("h6", Link, {
  color: "$text",
  fontSize: "2.5rem",
  fontWeight: "700",
  lineHeight: "1.5",
  letterSpacing: "-0.05em",
  cursor: "pointer",
  mb: "1.5rem",
  "@xsMax": {
    fontSize: "2.5rem",
  },
})

export const StyledGradientButton = styled("button", {
  padding: "0.5rem 1rem",
  background: "$transparent",
  backgroundImage: "linear-gradient(to right, #000000bf, #000000bf)",
  color: "$foreground",
})

export const SectionLabel = styled("div", {
  display: "inline-block",
  borderRadius: "50%",
  color: "$background",
  width: "40px",
  height: "40px",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontWeight: "700",
  mb: "24px",
  pt: "8px",
})

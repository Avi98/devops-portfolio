import { styled } from "@/theme/stitches.config"

import Link from "../link"
import Text from "../text"

export const HeroTitle = styled("h2", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  "@smMax": {
    display: "flex",
    flexDirection: "column",
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
  "& .devops-process__description": {
    maxWidth: "790px",
    fontSize: "1.25rem",
    lineHeight: "2rem",
    textAlign: "-webkit-center",
  },
  "& .design-image": {
    width: "100%",
    height: "auto",
  },
})

export const SectionFlex = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
  "@smMax": {
    flexDirection: "column",
  },
})

export const SectionFlexItem = styled("div", {
  width: "45%",
  "@smMax": {
    width: "100%",
  },
  variants: {
    position: {
      left: {
        marginRight: "10%",
        "@smMax": {
          marginRight: "0",
        },
      },
      right: {
        flexWrap: "wrap",
      },
    },
  },
})

export const SectionFeatures = styled("div", {
  display: "flex",
  flexDirection: "column",

  my: "2rem",
  variants: {
    type: {
      develop: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: "-31px",
        "@smMax": {
          flexDirection: "column-reverse",
        },
      },
      design: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        "@smMax": {
          flexDirection: "column",
        },
      },
      seo: {},
      pathline: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: "100px",
        marginBottom: "-93px",
        "@smMax": {
          display: "flex",
          marginBottom: "0",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
  },
})

export const SectionFeature = styled("div", {
  "@smMax": {
    marginBottom: "50px",
    textAlign: "-webkit-center",
  },
  variants: {
    flex: {
      right: {
        display: "flex",
      },
    },
    position: {
      left: {
        width: "45%",
        alignSelf: "center",
        "@smMax": {
          width: "100%",
        },
      },
      right: {
        width: "45%",
        alignSelf: "center",
        "@smMax": {
          width: "100%",
          marginBottom: "50px",
        },
      },
      tabs: {
        width: "25%",
        alignSelf: "center",
        "@smMax": {
          width: "100%",
          marginBottom: "50px",
        },
      },
      center: {
        display: "flex",
        paddingTop: "60px",
        flexDirection: "column",
        alignItems: "center",
        width: "10%",
        "@smMax": {
          display: "none",
        },
      },
    },
  },

  "& .flex-icon": {},

  "& h5": {
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "-0.05em",
    margin: "0 0 8px",
  },

  "& p": {
    lineHeight: "28px",
    fontWeight: "400",
    margin: "0",
  },

  //Process Section Features - Styled for specific content types related to develop section

  "& .devops-process__image": {
    width: "100%",
    height: "100%",
  },

  "& .design-image": {
    width: "100%",
    height: "100%",
  },

  "&. devops-process__feature-center": {
    flex: "1 1",
  },
  //Process Section Pathline

  "& .path-line--first": {
    display: "flex",
    height: "100%",
    marginLeft: "-1px",
  },

  "& .path-line--last": {
    display: "flex",
    height: "100%",
    marginLeft: "-1px",
  },

  "& .devops-process__path-line": {
    width: "1px",
    alignSelf: "center",
    flex: "1 1",
  },

  "& .devops-process__path-stretch": {
    flex: "1 1",
  },

  "& .devops-process__path-circle": {
    width: "11px",
    height: "11px",
    boxShadow: "0 0 0 2px #444 inset",
    borderRadius: "50%",
    pargin: "4px 0",
  },

  "& .path-line_gradient": {
    background: "linear-gradient(to bottom, #000000, #444)",
  },

  "& .path-line_dotted": {
    borderRight: "1px dashed #444",
    borderWidth: "1px",
  },
  "& .path-line__connection": {
    paddingTop: "20px",
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
  variants: {
    type: {
      optimize: {
        height: "350px",
        background: "linear-gradient( #444, #f9cb28)",
        marginLeft: "-1px",
        "@smMax": {
          height: "100px",
        },
      },
    },
  },
})

export const HeroSpan = styled("span", {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  zIndex: "1",
  textAlign: "center",
  fontSize: "5.5rem",
  lineHeight: "1",
  fontWeight: "800",
  letterSpacing: "-0.06em",
  paddingBottom: "1rem",
  "@xsMax": {
    fontSize: "4rem",
  },
})

export const SectionTitle = styled("h3", {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  zIndex: "1",
  fontSize: "2rem",
  fontWeight: "700",
  letterSpacing: "-0.05em",
})

export const SectionSubTitle = styled("h4", Link, {
  color: "$text",
  fontSize: "3.75rem",
  fontWeight: "600",
  lineHeight: "3rem",
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

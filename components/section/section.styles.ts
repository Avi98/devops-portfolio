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
      top: {},
      bottom: {
        display: "flex",
        flexDirection: "row",
      },
    },
    type: {
      "web-design": {
        "& .section__styles--top-border": {
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          zIndex: "1",
          top: "-400px",
          left: "50%",
          transform: "translate3d(-50%,0,0)",
          width: "100%",
        },
        "& .section__styles--top-border-left--web-design": {
          background: "linear-gradient(180deg, #007cf0, #00dfd8)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(120px,0,0)",
        },

        "& .section__styles--top-border-right--web-design": {
          background: "linear-gradient(180deg, #00dfd8, #007cf0)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(-120px,0,0)",
        },
        "& .section__styles--bottom-border": {
          display: "flex",
          position: "absolute",
          zIndex: "0",
          top: "unset",
          left: "50%",
          transform: "translate3d(-50%,0,0)",
          width: "100%",
        },
        "& .section__styles--bottom-border-left": {
          background: "linear-gradient(180deg, #007cf0, #00dfd8)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(120px,0,0)",
        },

        "& .section__styles--bottom-border-right": {
          background: "linear-gradient(180deg, #00dfd8, #007cf0)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(-120px,0,0)",
        },
      },
      "app-development": {
        "& .section__styles--top-border": {
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          zIndex: "1",
          top: "-400px",
          left: "50%",
          transform: "translate3d(-50%,0,0)",
          width: "100%",
        },
        "& .section__styles--top-border-left--app-development": {
          background: "linear-gradient(180deg, #9A1FB8, #FF0080)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(120px,0,0)",
        },
        "& .section__styles--top-border-right--app-development": {
          background: "linear-gradient(180deg, #FF0080, #9A1FB8)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(-120px,0,0)",
        },
      },
      seo: {
        "& .section__styles--top-border": {
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          zIndex: "1",
          top: "-400px",
          left: "50%",
          transform: "translate3d(-50%,0,0)",
          width: "100%",
        },
        "& .section__styles--top-border-left--seo": {
          background: "linear-gradient(180deg, #ff4d4d, #f9cb28)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(120px,0,0)",
        },
        "& .section__styles--top-border-right--seo": {
          background: "linear-gradient(180deg, #f9cb28, #ff4d4d)",
          opacity: "0.35",
          filter: "blur(68px)",
          width: "540px",
          height: "480px",
          transform: "translate3d(-120px,0,0)",
        },
      },
    },
  },

  // bleed through styles from ./the-process/styles.ts
  "& .devops-process__section-header--optimize": {
    marginTop: "-200px",
    zIndex: "1",
    "@smMax": {
      marginTop: "10px",
    },
  },
  "& .develop-feature-3__features--path-line": {
    display: "none",
  },
  "& .develop-feature-3__feature-center .devops-process__path-line": {
    display: "none",
  },
})

export const StyledSectionTitle = styled("h3", {
  textAlign: "center",
  margin: "0 0 24px",
  fontWeight: "700",
  letterSpacing: "-0.05em",
  fontSize: "3.75rem",
  background: "$textGradient",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@xsMax": {
    fontSize: "2.25rem",
  },
})

export const StyledSectionSubtitle = styled("h4", {
  textAlign: "center",
  margin: "0 0 24px",
  fontWeight: "700",
  letterSpacing: "-0.05em",
  fontSize: "2.75rem",
  background: "$textGradient",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@xsMax": {
    fontSize: "2.25rem",
  },
})

export const StyledSectionDescription = styled("p", {
  maxWidth: "790px",
  margin: "0 auto 35px",
  color: "#888888",
  fontWeight: "400",
  fontSize: "1.25rem",
  lineHeight: "2rem",
  letterSpacing: "-.020625rem",
  textAlign: "-webkit-center",
})

export const StyledSectionContent = styled("div", {})

export const StyledSectionImage = styled(Image, {
  width: "100%",
  height: "100%",
})

export const StyledSectionButton = styled("button", {})

export const StyledSectionBackground = styled("span", {})

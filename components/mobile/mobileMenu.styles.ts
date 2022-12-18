import { styled } from "@/theme/stitches.config"

export const MobileHeaderWrapper = styled("div", {
  position: "fixed",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "100%",
  backgroundColor: "rgba(0,0,0,.5)",
  height: "76px",
  zIndex: 101,
  boxShadow: "none",
})

export const MobileHeader = styled("header", {
  width: "100%",
})

export const MobileHeaderNavFirst = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "64px",
  "&>div": {
    marginRight: "auto",
    px: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
})

export const MobileMenuWrapper = styled("nav", {
  display: "block",
  visibility: "visible",
  width: "100%",
  maxWidth: "100vw",
  height: "calc(100vh - 64px)",
  padding: "0 24px 24px 24px",
  background: "$background",
  zIndex: 2000,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  top: "calc(var(76px) - 1px)",
  overflowY: "scroll",
  webkitOverflowScrolling: "touch",
})

export const MobileMenuList = styled("ul", {
  listStyle: "none",
  margin: "0",

  "& li": {
    cursor: "pointer",
    padding: "12px 0",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: "1rem",
    height: "calc(2 * var(24px))",
    borderBottom: "1px solid $border",
    transition: "background-color .2s ease-in-out;",
    marginBottom: "0px",
  },
  "& li:hover": {
    backgroundColor: "$backgroundHover",
  },
})

export const MobileMenuListLink = styled("a", {
  display: "block",
  textDecoration: "none",
  color: "$text",
  fontSize: "$3",
  fontWeight: 500,
  lineHeight: "1.5",
  letterSpacing: "-0.02em",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: "$primary",
  },
})

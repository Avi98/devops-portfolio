import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledMobileMenu = styled("nav", {
  display: "flex",
  visibility: "visible",
  width: "100%",
  maxWidth: "100vw",
  padding: "0 24px 24px 24px",
  background: "$background",
  zIndex: "2000",
  bottom: "0",
  left: "0",
  right: "0",
  top: "calc(var(76px) - 1px)",
  overflowY: "scroll",
  webkitOverflowScrolling: "touch",
})

export const StyledMenuHeaderWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  top: "0",
  zIndex: "101",
  width: "100%",
  maxWidth: "100%",
  backgroundColor: "rgba(0,0,0,.5)",
  minHeight: "76px",
})

export const StyledHeaderNavFirst = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "76px",
  "& div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "76px",
  },
})

export const StyledMenuHeader = styled("header", {
  justifyContent: "right",
  width: "100%",
  maxWidth: "100%",
  minHeight: "76px",
})

export const StyledMobileMenuList = styled("ul", {
  listStyle: "none",
  margin: "0",
  padding: "0",
  variants: {
    MenuButtons: {
      buttons: {
        marginBottom: "12px",
      },
    },
  },
})

export const StyledMobileMenuListItem = styled("li", {
  marginBottom: "12px",
})

export const StyledMenuButton = styled("button", {
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "5px",
  backgroundColor: "transparent",
  border: "none",
  transition: "background-color .2s ease-in-out",
  userSelect: "none",
  webkitTapHighlightColor: "transparent",
  cursor: "pointer",
  pointerEvents: "all",
})

export const StyledMenuToggle = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  "&:before": {
    content: "''",
    height: "1px",
    width: "22px",
    backgroundColor: "$foreground",
    transition: "transform .15s ease-in-out",
    transform: "translateY(-4px) rotate(0deg)",
    "&[isOpen]": {
      transform: "translateY(0px) rotate(45deg)",
    },
  },
  "&:after": {
    content: "''",
    display: "block",
    height: "1px",
    width: "22px",
    backgroundColor: "$foreground",
    transition: "transform .15s ease-in-out",
    transform: "translateY(4px) rotate(0deg)",
  },
})

export const StyledMenuExpanded = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  "&:before": {
    content: "''",
    height: "1px",
    width: "22px",
    backgroundColor: "$foreground",
    transition: "transform .15s ease-in-out",
    transform: "translateY(0px) rotate(45deg)",
  },
  "&:after": {
    content: "''",
    display: "block",
    height: "1px",
    width: "22px",
    backgroundColor: "$foreground",
    transition: "transform .15s ease-in-out",
    transform: "translateY(0px) rotate(-45deg)",
  },
})

export type MobileMenuVariantsProps = VariantProps<typeof StyledMobileMenu>

export default StyledMobileMenu

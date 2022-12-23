import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledNav = styled("nav", {
  top: 0,
  height: "76px",
  width: "100%",
  position: "fixed",
  background: "transparent",
  zIndex: "$max",
})

export const StyledNavList = styled("ul", {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  listStyle: "none",
  margin: 0,
  padding: 0,
})

export const StyledNavContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "100%",
  height: "76px",

  "& .navbar__social-icon": {
    fill: "$colors$accents6",
  },
  "& .nav__wrapper": {
    maxWidth: "1400px",
    width: "100%",
    display: "flex",
    px: "26px",
    justifyContent: "space-between",
  },
  "& .nav__logo": {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    showBlur: {
      true: {
        background: "$background",
        "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
          {
            background: "$headerBackground",
          },
      },
    },
    isDetached: {
      true: {
        backdropFilter: "saturate(180%) blur(10px)",
        boxShadow: "0px 5px 20px -5px rgba(2, 1, 1, 0.5)",
      },
      false: {
        backdropFilter: "none",
        boxShadow: "none",
        background: "transparent",
      },
    },
  },
})

export type NavVariantsProps = VariantProps<typeof StyledNav>

export default StyledNav

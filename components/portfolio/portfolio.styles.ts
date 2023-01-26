import Image from "next/image"

import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledPortfolio = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "$4",
  padding: "$4",
  borderRadius: "$2",
  "@smMax": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@xsMax": {
    gridTemplateColumns: "1fr",
  },
})

export const StyledPortfolioItem = styled("button", {
  position: "relative",
  width: "100%",
  height: "fit-content",
  padding: 0,
  boxShadow: "0 0 0 1px hsl(0deg 0% 100% / 10%)",
  borderColor: "#000",
  borderWidth: "1px",
  "&:hover": {
    "& > div": {
      opacity: 1,
    },
  },
  "& > div": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > h3": {
      color: "$white",
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
  },
})

export const StyledPortfolioImage = styled(Image, {
  width: "100%",
  height: "auto",
})

export const StyledModalImage = styled(Image, {
  width: "100%",
  height: "auto",
  marginBottom: "0px",
})

export type StyledPortfolioProps = VariantProps<typeof StyledPortfolio>

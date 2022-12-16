import Image from "next/image"

import { styled } from "@/theme"

export const StyledSection = styled("section", {
  zIndex: "$2",
  width: "100%",
})

export const StyledSectionTitle = styled("h3", {})

export const StyledSectionSubtitle = styled("h4", {})

export const StyledSectionDescription = styled("p", {})

export const StyledSectionContent = styled("div", {})

export const StyledSectionImage = styled(Image, {
    width: "100%",
    height: "100%",
})

export const StyledSectionButton = styled("button", {})

export const StyledSectionBackground = styled("span", {})

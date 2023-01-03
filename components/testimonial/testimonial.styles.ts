import Image from "next/image"

import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledTestimonialWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-around",
  paddingTop: "100px",
  paddingBottom: "100px",
  "@smMax": {
    flexDirection: "column",
    alignItems: "center",
  },
})

export const StyledTestimonial = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "20px 20px",
  margin: "20px 20px",
  border: "1px solid $gray300",
  borderRadius: "10px",
  maxWidth: "600px",
})

export const StyledTestimonialContent = styled("q", {
  paddingBottom: "20px",
  borderBottom: "1px solid $gray300",
})

export const StyledTestimonialAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",
})

export const StyledTestimonialAuthorTitle = styled("p", {
  margin: "0",
})

export const StyledTestimonialCompany = styled("p", {
  margin: "0",
})

export const StyledTestimonialImage = styled(Image, {
  borderRadius: "100%",
  marginRight: "20px",
})

export const StyledTestimonialAuthorWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
})

export type StyledTestimonialProps = VariantProps<typeof StyledTestimonial>

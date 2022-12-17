import { StyledCardBlur } from "@/components"
import { styled } from "@/theme/stitches.config"

export const StyledCommunityCard = styled("a", StyledCardBlur, {
  width: "100%",
  minHeight: "140px",
  transition: "$default",
  "& .github-icon > path": {
    fill: "#343434",
  },
  "&:hover": {
    opacity: 0.8,
  },
})

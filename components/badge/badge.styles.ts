import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledBadge = styled("span", {
  display: "inline-block",
  textTransform: "uppercase",
  padding: "5px 5px",
  margin: "0 2px",
  fontSize: "10px",
  fontWeight: "800",
  borderRadius: "14px",
  letterSpacing: "0.6px",
  lineHeight: 1,
  textShadow: "0 1px 1px rgba(0, 0, 0, 0.16)",
  boxShadow: "1px 2px 5px 0px rgb(0 0 0 / 10%)",
  alignItems: "center",
  alignSelf: "center",
  color: "$white",
  variants: {
    type: {
      default: {
        bg: "$primaryLight",
        color: "$primary",
      },
      web: {
        bg: "$webGradient",
        color: "$background",
      },
      app: {
        bg: "$appGradient",
        color: "$background",
      },
      seo: {
        bg: "$seoGradient ",
        color: "$background",
      },
    },
    solid: {
      true: {},
    },
  },
  defaultVariants: {
    type: "seo",
  },
  compoundVariants: [
    {
      type: "web",
      solid: true,
      css: {
        bg: "$webGradient",
        color: "$background",
      },
    },
    {
      type: "app",
      solid: true,
      css: {
        bg: "$appGradient",
        color: "$background",
      },
    },
    {
      type: "seo",
      solid: true,
      css: {
        bg: "$seoGradient",
        color: "$background",
      },
    },
  ],
})

export type BadgeVariantsProps = VariantProps<typeof StyledBadge>

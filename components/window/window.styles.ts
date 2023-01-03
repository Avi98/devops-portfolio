import { Box } from "@/components/primitives"
import { styled, VariantProps } from "@/theme/stitches.config"

export const StyledWindow = styled("div", {
  width: "100%",
  height: "auto",
  maxHeight: "301px",
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "@smMax": {
    width: "100%",
  },
  "& .infographic__image": {
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    px: "1px",
  },
})

export const StyledWindowIcon = styled(Box, {
  size: "$4",
  br: "$pill",
  mr: "$3",
  variants: {
    color: {
      red: {
        bg: "$red600",
      },
      green: {
        bg: "$green600",
      },
      yellow: {
        bg: "$yellow600",
      },
    },
  },
})

export const StyledWindowActions = styled("div", {
  dflex: "flex-start",
  alignItems: "center",
  px: "$5",
  pt: "$5",
  pb: "$6",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  border: "1px solid #171717",
  zIndex: "$2",
  position: "sticky",
  top: 0,
  variants: {
    variant: {
      normal: {},
      code: {
        background: "$codeBackground",
      },
    },
  },
  defaultVariants: {
    variant: "code",
  },
})

export type WindowActionsVariantProps = VariantProps<typeof StyledWindowActions>

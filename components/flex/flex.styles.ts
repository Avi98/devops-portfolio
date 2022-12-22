import { styled } from "@/theme/stitches.config"

export const StyledFlex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
    wrap: {
      wrap: {
        flexWrap: "wrap",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
    },
    gap: {
      none: {
        gap: "0",
      },
      small: {
        gap: "10px",
      },
      medium: {
        gap: "20px",
      },
      large: {
        gap: "30px",
      },
    },
  },
  defaultVariants: {
    direction: "row",
    justify: "start",
    align: "start",
    wrap: "nowrap",
    gap: "none",
  },
})

export const StyledFlexItem = styled("div", {
  variants: {
    grow: {
      0: {
        flexGrow: 0,
      },
      1: {
        flexGrow: 1,
      },
    },
    shrink: {
      0: {
        flexShrink: 0,
      },
      1: {
        flexShrink: 1,
      },
    },
    basis: {
      auto: {
        flexBasis: "auto",
      },
      content: {
        flexBasis: "content",
      },
      0: {
        flexBasis: "0",
      },
      1: {
        flexBasis: "1",
      },
      2: {
        flexBasis: "2",
      },
      3: {
        flexBasis: "3",
      },
      4: {
        flexBasis: "4",
      },
      5: {
        flexBasis: "5",
      },
      6: {
        flexBasis: "6",
      },
      7: {
        flexBasis: "7",
      },
      8: {
        flexBasis: "8",
      },
      9: {
        flexBasis: "9",
      },
      10: {
        flexBasis: "10",
      },
      11: {
        flexBasis: "11",
      },
      12: {
        flexBasis: "12",
      },
    },
  },
  defaultVariants: {
    grow: 0,
    shrink: 1,
    basis: "auto",
  },
})

export const StyledFlexItemAuto = styled("div", {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
})

export const StyledFlexItemContent = styled("div", {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "content",
})

export const StyledFlexItemFixed = styled("div", {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
})

export const StyledFlexItemFixedContent = styled("div", {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "content",
})

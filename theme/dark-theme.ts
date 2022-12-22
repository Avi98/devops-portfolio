import {
  blueDark,
  cyanDark,
  grayDark,
  greenDark,
  pinkDark,
  purpleDark,
  redDark,
  yellowDark,
} from "./colors"

export default {
  colors: {
    // background
    background: "$black",
    foreground: "$white",
    backgroundContrast: "$accents0",

    //semantic colors
    ...blueDark,
    ...purpleDark,
    ...greenDark,
    ...yellowDark,
    ...redDark,
    ...cyanDark,
    ...pinkDark,
    ...grayDark,

    // brand colors
    primaryLight: "$blue50",
    primaryLightHover: "$blue100",
    primaryLightActive: "$blue200",
    primaryLightContrast: "$blue600",

    secondaryLight: "$purple50",
    secondaryLightHover: "$purple100",
    secondaryLightActive: "$purple200",
    secondaryLightContrast: "$purple800",
    secondary: "$purple700",
    secondaryBorder: "$purple500",
    secondaryBorderHover: "$purple600",
    secondarySolidHover: "$purple700",
    secondaryShadow: "$purple500",

    successLight: "$green50",
    successLightHover: "$green100",
    successLightActive: "$green200",

    warningLight: "$yellow50",
    warningLightHover: "$yellow100",
    warningLightActive: "$yellow200",

    errorLight: "$red50",
    errorLightHover: "$red100",
    errorLightActive: "$red200",
    errorLightContrast: "$red700",

    neutralLight: "$gray200",
    neutralLightHover: "$gray300",
    neutralLightActive: "$gray400",
    neutralSolidContrast: "$white",

    // misc
    text: "$gray900",
    link: "$blue700",
    codeLight: "$cyan50",
    code: "$cyan600",
    selection: "$pink800",

    design: "linear-gradient(90deg, #007CF0 0%, #00DFD8 100%)",
    develop: "linear-gradient(90deg, #7928CA 0%, #ff0080 100%)",
    optimize: "linear-gradient(90deg, #ff4d4d, #f9cb28)",

    designPath: "linear-gradient($background, #019ae9)",
    developPath: "linear-gradient($background, #9a1fb8)",
    optimizePath: "linear-gradient($background, #f9cb28)",

    webGradient: "linear-gradient(90deg, $webColorA 0%, $webColorB 100%)",
    appGradient: "linear-gradient(90deg, $appColorA 0%, $appColorB 100%)",
    seoGradient: "linear-gradient(90deg, $seoColorA 0%, $seoColorB 100%)",
    textGradient: "linear-gradient(180deg,#fff,hsla(0,0%,100%,.75))",
    gradient:
      "linear-gradient(112deg, $cyan600 -63.59%, $pink600 -20.3%, $blue600 70.46%)",

    redToOrangeGradient: "linear-gradient(-70deg, #ed4e50 0%, #f06f00 100%)",
    skyToBlueGradient:
      "linear-gradient(260deg, #3d67ff 0%, #9773ff 50%, #efceff 80%)",
  },
  shadows: {
    xs: "0 2px 8px 1px rgb(0 0 0 / 0.07), 0 1px 1px -1px rgb(0 0 0 / 0.04)",
    sm: "0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)",
    md: "0 12px 20px 6px rgb(0 0 0 / 0.08)",
    lg: "0 12px 34px 6px rgb(0 0 0 / 0.18)",
    xl: "0 25px 65px 0px rgb(0 0 0 / 0.35)",
  },
  dropShadows: {
    xs: "drop-shadow(0 2px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))",
    sm: "drop-shadow(0 2px 8px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.04))",
    md: "drop-shadow(0 4px 12px rgb(0 0 0 / 0.08)) drop-shadow(0 20px 8px rgb(0 0 0 / 0.04))",
    lg: "drop-shadow(0 12px 24px rgb(0 0 0 / 0.15)) drop-shadow(0 12px 14px rgb(0 0 0 / 0.1))",
    xl: "drop-shadow(0 25px 34px rgb(0 0 0 / 0.35))",
  },
}

import React from "react"

import { theme } from "./stitches.config"
import { DevOpsThemeContext } from "./types"

export const defaultContext: DevOpsThemeContext = {
  isDark: true,
  theme,
  type: "dark",
}

const ThemeContext: React.Context<DevOpsThemeContext> =
  React.createContext<DevOpsThemeContext>(defaultContext)

export default ThemeContext

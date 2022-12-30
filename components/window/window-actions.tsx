import React from "react"

import { CSS } from "@/theme/stitches.config"

import {
  StyledWindowActions,
  StyledWindowIcon,
  WindowActionsVariantProps,
} from "./window.styles"

export type WindowActionsProps = WindowActionsVariantProps & {
  css?: CSS
  children?: React.ReactNode
}

const WindowActions: React.FC<WindowActionsProps> = props => {
  return (
    <StyledWindowActions className="devui-window-actions" {...props}>
      <StyledWindowIcon color="red" />
      <StyledWindowIcon color="yellow" />
      <StyledWindowIcon color="green" />
    </StyledWindowActions>
  )
}

WindowActions.toString = () => ".devui-window-actions"

export default WindowActions

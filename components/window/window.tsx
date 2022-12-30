import clsx from "clsx"

import WindowActions from "./window-actions"
import { StyledWindow } from "./window.styles"

interface Props {
  className?: string
  children?: React.ReactNode
}

const Window: React.FC<Props> = props => {
  return (
    <StyledWindow className={clsx("devui-window", props.className)}>
      <WindowActions />
      {props.children}
    </StyledWindow>
  )
}

Window.toString = () => ".devui-window"

export default Window

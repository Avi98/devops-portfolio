import React from "react"

import {
  CollapseIconVariantsProps,
  StyledCollapseIcon,
} from "./collapse.styles"

const CollapseIcon: React.FC<CollapseIconVariantsProps> = ({ ...props }) => {
  return (
    <StyledCollapseIcon
      className="devui-collapse-icon"
      fill="none"
      focusable="false"
      height="20"
      role="presentation"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 19l-7-7 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </StyledCollapseIcon>
  )
}

CollapseIcon.toString = () => ".devui-collapse-icon"

const MemoCollapseIcon = React.memo(CollapseIcon)

export default MemoCollapseIcon

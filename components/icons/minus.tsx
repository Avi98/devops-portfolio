import React from "react"

import { theme } from "@/theme"

import { IconProps } from "./index"

const Minus: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 12h12"
        fill="none"
        stroke={fill || theme?.colors?.text?.value}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default Minus

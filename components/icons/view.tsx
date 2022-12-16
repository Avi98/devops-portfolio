import * as React from "react"

import { theme } from "@/theme"

import { IconProps } from "./index"

const View: React.FC<IconProps> = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      data-name="Iconly/Curved/Profile"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipRule="evenodd"
        fill="none"
        fillRule="evenodd"
        stroke={fill || theme?.colors?.accents3?.value}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path
          clipRule="evenodd"
          d="M15.1615 12.0531C15.1615 13.7991 13.7455 15.2141 11.9995 15.2141C10.2535 15.2141 8.8385 13.7991 8.8385 12.0531C8.8385 10.3061 10.2535 8.89108 11.9995 8.89108C13.7455 8.89108 15.1615 10.3061 15.1615 12.0531Z"
        />
        <path
          clipRule="evenodd"
          d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
        />
      </g>
    </svg>
  )
}

export default View

import * as React from "react"

export interface Props {
  fill?: string
  width?: number
  height?: number
  size?: number
}

const Infinity: React.FC<Props> = ({
  fill,
  size,
  width = 453.6,
  height = 211.3,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      shapeRendering="geometricPrecision"
      viewBox="0 0 453.6px 211.3px"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M177-8.7c0 0 9.9-14.9 33.4-14.9c23.5 0 39.3 19.8 39.3 39.7s-14.2 39.7-38.6 39.7s-39-24.8-48.7-39.7 c-9.7-14.9-26.9-39.7-51.2-39.7S75.2-3.8 75.2 16.1S85.9 55.8 112 55.8c26.2 0 35.9-14.9 35.9-14.9"
        display="none"
        fill="none"
        stroke="#000000"
        strokeDasharray="0.5 1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="9.3333"
        strokeWidth="0.25"
      />
      <path
        d="M264.8 41.4c0 0 25.6-38.3 86-38.3 c60.4 0 101.3 51.1 101.3 102.2s-36.5 102.2-99.4 102.2s-100.4-63.8-125.4-102.2C202.3 66.9 158 3.1 95.5 3.1S2.5 54.2 2.5 105.3 s27.6 102.2 95 102.2c67.4 0 92.4-38.3 92.4-38.3"
        fill="none"
        opacity="0.6"
        stroke="#FFFFFF"
        strokeDasharray="4 8"
      />
    </svg>
  )
}

export default Infinity

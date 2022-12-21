import * as React from "react"

export interface Props {
  fill?: string
  width?: number
  height?: number
  size?: number
  style: "outline" | "mini"
}

const At: React.FC<Props> = ({
  fill,
  size,
  width = 24,
  height = 24,
  style,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height} //"0 0 24 24"
      viewBox={style === "outline" ? "0 0 24 24" : "0 0 20 20"}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {style === "outline" ? (
        <path
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={1.5}
        />
      ) : style === "mini" ? (
        <path
          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={1.5}
        />
      ) : null}
    </svg>
  )
}

export default At

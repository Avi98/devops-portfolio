import * as React from "react"

export interface Props {
  fill?: string
  width?: number
  height?: number
  size?: number
  style?: "outline" | "solid" | "mini"
}

const Phone: React.FC<Props> = ({
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
      height={size || height}
      viewBox={
        style === "outline"
          ? "0 0 24 24"
          : style === "solid"
          ? "0 0 24 24"
          : "0 0 20 20"
      }
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {style === "outline" ? (
        <path
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      ) : style === "solid" ? (
        <path
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      ) : style === "mini" ? (
        <path
          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      ) : null}
    </svg>
  )
}

export default Phone

import * as React from "react"

import { IconProps } from "@/interface/Icons"

interface Props {
  colorA?: string
  colorB?: string
}

type GradientProps = IconProps & Props

const AppChecklist: React.FC<GradientProps> = ({
  fill,
  size,
  height,
  width,
  colorA,
  colorB,
  ...props
}) => {
  return (
    <svg
      data-name="Iconly/Curved/Activity"
      height={size || height || 56}
      viewBox="0 0 56 56"
      width={size || width || 56}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeWidth={2}
        transform="translate(5 5)"
      >
        <g strokeLinejoin="round">
          <g strokeLinecap="round">
            <path
              d="m39.0491803 31.0125732c4.4182609 0 8 3.5817392 8 8 0 4.4182609-3.5817391 8-8 8-4.4182608 0-8-3.5817391-8-8 0-4.4182608 3.5817392-8 8-8z"
              stroke={colorB}
            />
            <path
              d="m38.116802 35.7611499 3.845906 2.3959271c.4687613.2920296.6120308.9087724.3200013 1.3775338-.0820762.1317473-.1936951.2425793-.3260199.3237212l-3.8459059 2.3583203c-.4708158.2887056-1.0865296.141076-1.3752352-.3297398-.0964582-.1573023-.1475125-.338226-.1475125-.5227477v-4.7542474c0-.5522847.4477152-1 1-1 .1869258 0 .3701096.0523925.5287662.1512325z"
              fill-rule="nonzero"
              stroke={colorB}
            />
            <path
              d="m27 38h-25c-1.22792698 0-2-.8400289-2-2v-34c0-1.15997107.77207302-2 2-2h38c1.227927 0 2 .84002893 2 2v25"
              stroke={colorA}
            />
          </g>
          <path
            d="m33.5599344 13-3.0691874 3.0651125-1.490747-1.4854753"
            stroke={colorB}
            strokeLinecap="round"
          />
          <path
            d="m13.5599344 13-3.0691874 3.0651125-1.490747-1.4854753"
            stroke={colorB}
            strokeLinecap="round"
          />
          <path d="m4 10h15v9h-15z" stroke={colorA} />
          <path d="m23 10h15v9h-15z" stroke={colorA} />
          <path
            d="m33.5599344 22-3.0691874 3.0651125-1.490747-1.4854753"
            stroke={colorB}
            strokeLinecap="round"
          />
          <path
            d="m13.5599344 22-3.0691874 3.0651125-1.490747-1.4854753"
            stroke={colorB}
            strokeLinecap="round"
          />
          <path d="m4 19h15v9h-15z" stroke={colorA} />
          <path
            d="m32.9971924 28h-7.9971924c-1.1045695 0-2-.8954305-2-2v-5c0-1.1045695.8954305-2 2-2h11c1.1045695 0 2 .8954305 2 2v6.0246582"
            stroke={colorA}
            strokeLinecap="round"
          />
        </g>
        <path
          d="m28.0251465 34h-22.0251465c-1.1045695 0-2-.8954305-2-2 0-.3951034 0 .3095678 0 .1140137m0-26.1140137c0-1.1045695.8954305-2 2-2h30c1.1045695 0 2 .8954305 2 2v.03149414"
          stroke={colorB}
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default AppChecklist

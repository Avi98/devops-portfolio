import React from "react"

import { CSS } from "@/theme/stitches.config"
import withDefaults from "@/utils/clsx"
import { getMargin } from "@/utils/dimensions"

import { SpacerVariantsProps, StyledSpacer } from "./spacer.styles"

interface Props {
  horizontal?: number
  vertical?: number
  css?: CSS
  as?: keyof JSX.IntrinsicElements
}

const defaultProps = {
  horizontal: 1,
  vertical: 1,
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type SpacerProps = Props &
  typeof defaultProps &
  NativeAttrs &
  SpacerVariantsProps

const Spacer: React.FC<SpacerProps> = ({
  vertical,
  horizontal,
  inline,
  css,
  ...props
}) => {
  const marginLeft = getMargin(horizontal)
  const marginTop = getMargin(vertical)

  return (
    <StyledSpacer
      aria-hidden="true"
      css={{
        marginLeft: `${marginLeft} !important`,
        marginTop: `${marginTop} !important`,
        ...(css as any),
      }}
      {...props}
    />
  )
}

Spacer.toString = () => ".devui-spacer"

const MemoSpacer = React.memo(Spacer)

export default withDefaults(MemoSpacer, defaultProps)

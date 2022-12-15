import React from "react"

import { CSS } from "@/theme/stitches.config"
import withDefaults from "@/utils/with-defaults"

import StyledCol, { ColVariantsProps } from "./col.styles"

interface Props {
  as?: keyof JSX.IntrinsicElements
  css?: CSS
  offset?: number
  span?: number
}

const defaultProps = {
  offset: 0,
  span: 12,
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type ColProps = Props &
  ColVariantsProps &
  NativeAttrs &
  typeof defaultProps

const Col: React.FC<React.PropsWithChildren<ColProps>> = ({
  children,
  span,
  offset,
  css,
  ...props
}) => {
  return (
    <StyledCol
      css={{
        width: `${(100 / 12) * span}%`,
        marginLeft: `${(100 / 12) * offset}%`,
        ...(css as any),
      }}
      {...props}
    >
      {children}
    </StyledCol>
  )
}

Col.toString = () => ".devui-column"

const MemoCol = React.memo(Col)

export default withDefaults(MemoCol, defaultProps)

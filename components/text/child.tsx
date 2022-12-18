import React, { ReactNode, useMemo } from "react"

import { CSSFontSize } from "@/theme"
import type { CSS } from "@/theme/stitches.config"
import { __DEV__ } from "@/utils/assertion"
import { isNormalColor } from "@/utils/color"
import { useDOMRef } from "@/utils/dom"
import type { SimpleColors } from "@/utils/prop-types"
import { ReactRef } from "@/utils/refs"

import { StyledText, TextVariantsProps } from "./text.styles"

type As = keyof JSX.IntrinsicElements | React.ComponentType<any>

export interface Props {
  tag: keyof JSX.IntrinsicElements
  children?: ReactNode
  color?: SimpleColors | string
  size?: CSSFontSize
  transform?: CSS["textTransform"]
  css?: CSS
  as?: As
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type TextChildProps = Props & NativeAttrs & TextVariantsProps

export const TextChild = React.forwardRef(
  (props: TextChildProps, ref: ReactRef<HTMLElement>) => {
    const {
      children,
      tag,
      color: userColor = "default",
      transform,
      size: fontSize,
      css,
      ...otherProps
    } = props

    const domRef = useDOMRef(ref)

    const color = useMemo(() => {
      if (isNormalColor(userColor)) {
        switch (userColor) {
          case "default":
            return "$text"
          default:
            return `$${userColor}`
        }
      }

      return userColor
    }, [userColor])

    return (
      <StyledText
        ref={domRef}
        as={tag}
        css={{
          color,
          fontSize,
          tt: transform,
          ...(css as any),
        }}
        {...otherProps}
      >
        {children}
      </StyledText>
    )
  }
)

if (__DEV__) {
  TextChild.displayName = "DevUI.TextChild"
}

TextChild.toString = () => ".devui-text-child"

export default React.memo(TextChild)

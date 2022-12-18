import React, { ReactNode, useMemo } from "react"

import { __DEV__ } from "@/utils/assertion"
import { useDOMRef } from "@/utils/dom"
import { TextTransforms } from "@/utils/prop-types"
import { ReactRef } from "@/utils/refs"

import TextChild, { TextChildProps } from "./child"

interface Props {
  children?: ReactNode
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  b?: boolean
  small?: boolean
  transform?: TextTransforms
  i?: boolean
  span?: boolean
  del?: boolean
  em?: boolean
  blockquote?: boolean
}

type ElementMap = { [key in keyof JSX.IntrinsicElements]?: boolean }

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type TextProps = Props &
  NativeAttrs &
  Omit<TextChildProps, keyof Props | "tag">

type TextRenderableElements = Array<keyof JSX.IntrinsicElements>

const getModifierChild = (
  tags: TextRenderableElements,
  children: ReactNode,
  size?: TextChildProps["size"],
  transform?: TextTransforms
) => {
  if (!tags.length) return children
  const nextTag = tags.slice(1, tags.length)

  return (
    <TextChild size={size} tag={tags[0]} transform={transform}>
      {getModifierChild(nextTag, children, size)}
    </TextChild>
  )
}

export const Text = React.forwardRef(
  (props: TextProps, ref: ReactRef<HTMLElement>) => {
    const {
      h1 = false,
      h2 = false,
      h3 = false,
      h4 = false,
      h5 = false,
      h6 = false,
      b = false,
      small = false,
      i = false,
      span = false,
      del = false,
      em = false,
      blockquote = false,
      transform = "none",
      size,
      children,
      ...otherProps
    } = props

    const domRef = useDOMRef(ref)

    const elements: ElementMap = { h1, h2, h3, h4, h5, h6, blockquote }
    const inlineElements: ElementMap = { span, small, b, em, i, del }
    const names = Object.keys(elements).filter(
      //@ts-ignore
      (name: keyof JSX.IntrinsicElements) => elements[name]
    ) as TextRenderableElements
    const inlineNames = Object.keys(inlineElements).filter(
      //@ts-ignore
      (name: keyof JSX.IntrinsicElements) => inlineElements[name]
    ) as TextRenderableElements

    const tag = useMemo(() => {
      if (names[0]) return names[0]
      if (inlineNames[0]) return inlineNames[0]

      return "p" as keyof JSX.IntrinsicElements
    }, [names, inlineNames])

    const renderableChildElements = inlineNames.filter(
      (name: keyof JSX.IntrinsicElements) => name !== tag
    ) as TextRenderableElements

    const modifers = useMemo(() => {
      if (!renderableChildElements.length) return children

      return getModifierChild(
        renderableChildElements,
        children,
        size,
        transform
      )
    }, [renderableChildElements, children, size, transform])

    return (
      <TextChild
        ref={domRef}
        size={size}
        tag={tag}
        transform={transform}
        {...otherProps}
      >
        {modifers}
      </TextChild>
    )
  }
)

if (__DEV__) {
  Text.displayName = "DevUI.Text"
}

Text.toString = () => ".devui-text"

export default React.memo(Text)

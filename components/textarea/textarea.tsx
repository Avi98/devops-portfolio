import React, { useImperativeHandle, useLayoutEffect, useRef } from "react"

import { CSS } from "@/theme/stitches.config"
import { __DEV__ } from "@/utils/assertion"
import {
  ExcludedInputProps,
  excludedInputPropsForTextarea,
} from "@/utils/prop-types"
import useResize from "@/utils/use-resize"
import useWarning from "@/utils/use-warning"
import withDefaults from "@/utils/with-defaults"

import Input from "../input"
import { Props as InputProps } from "../input/input-props"
import { calculateNodeHeight, getSizingData, SizingData } from "./utils"

export type TextareaHeightChangeMeta = {
  rowHeight: number
}

interface Props {
  rows?: number
  maxRows?: number
  minRows?: number
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void
  cacheMeasurements?: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

const defaultProps = {
  minRows: 3,
  maxRows: 6,
  cacheMeasurements: true,
  initialValue: "",
}

type NativeAttrs = Omit<
  React.TextareaHTMLAttributes<any>,
  keyof Props | keyof InputProps
>

type BaseAttrs = Omit<InputProps, ExcludedInputProps>

export type TextareaProps = Props &
  typeof defaultProps &
  NativeAttrs &
  BaseAttrs & { css?: CSS }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (textareaProps, ref: React.Ref<HTMLTextAreaElement | null>) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const heightRef = React.useRef<number>(0)
    const measurementsCacheRef = React.useRef<SizingData>()

    const {
      cacheMeasurements,
      rows,
      maxRows,
      minRows,
      onChange,
      onHeightChange,
      css,
      ...props
    } = textareaProps

    Object.keys(props).forEach((propNameKey: any) => {
      if (excludedInputPropsForTextarea.indexOf(propNameKey) > -1) {
        // @ts-ignored
        delete props[propNameKey]
      }
    })

    const isControlled = props.value !== undefined

    if (__DEV__ && props.style) {
      if ("maxHeight" in props.style) {
        useWarning(
          "Using `style.maxHeight` for <Textarea/> is not supported. Please use `maxRows`."
        )
      }
      if ("minHeight" in props.style) {
        useWarning(
          "Using `style.minHeight` for <Textarea/> is not supported. Please use `minRows`."
        )
      }
    }

    useImperativeHandle(ref, () => textareaRef.current)

    const resizeTextarea = () => {
      const node = textareaRef.current!
      const nodeSizingData =
        cacheMeasurements && measurementsCacheRef.current
          ? measurementsCacheRef.current
          : getSizingData(node)

      if (!nodeSizingData) {
        return
      }

      measurementsCacheRef.current = nodeSizingData

      const [height, rowHeight] = calculateNodeHeight(
        nodeSizingData,
        node.value || node.placeholder || "x",
        rows || minRows,
        rows || maxRows
      )

      if (heightRef.current !== height) {
        heightRef.current = height
        node.style.setProperty("height", `${height}px`, "important")
        onHeightChange && onHeightChange(height, { rowHeight })
      }
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        resizeTextarea()
      }
      onChange && onChange(event)
    }

    if (typeof document !== "undefined") {
      useLayoutEffect(resizeTextarea)
      useResize(resizeTextarea)
    }

    return (
      <Input
        as="textarea"
        css={{ ...(css as any) }}
        ref={textareaRef}
        //@ts-ignore
        onChange={handleChange}
        {...props}
      />
    )
  }
)

if (__DEV__) {
  Textarea.displayName = "DevUI.Textarea"
}

Textarea.toString = () => ".devui-textarea"

export default withDefaults(Textarea, defaultProps)

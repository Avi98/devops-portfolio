import React from "react"

import { CSS } from "@/theme/stitches.config"
import { __DEV__ } from "@/utils/assertion"
import clsx from "@/utils/clsx"
import withDefaults from "@/utils/with-defaults"

import { ImageSkeletonVariantsProps, StyledImageSkeleton } from "./image.styles"

interface Props {
  opacity: number
  as?: keyof JSX.IntrinsicElements
  css?: CSS
  className?: string
}

const defaultProps = {
  opacity: 0.5,
  className: "",
}

export type ImageSkeletonProps = Props &
  typeof defaultProps &
  ImageSkeletonVariantsProps

const ImageSkeleton: React.FC<ImageSkeletonProps> = React.memo(
  ({ opacity, css, className, ...props }) => {
    return (
      <StyledImageSkeleton
        className={clsx("devui-image-skeleton", className)}
        css={{ opacity, ...(css as any) }}
        {...props}
      />
    )
  }
)

if (__DEV__) {
  ImageSkeleton.displayName = "DevUI.ImageSkeleton"
}

ImageSkeleton.toString = () => ".devui-image-skeleton"

export default withDefaults(ImageSkeleton, defaultProps)

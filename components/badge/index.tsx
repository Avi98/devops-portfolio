import React from "react"

import { CSS } from "@/theme/stitches.config"

import { BadgeVariantsProps, StyledBadge } from "./badge.styles"

interface Props {
  className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>

type BadgeProps = Props & NativeAttrs & BadgeVariantsProps & { css?: CSS }

const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({
  children,
  ...props
}) => {
  return <StyledBadge {...props}>{children}</StyledBadge>
}

Badge.toString = () => ".devui-badge"

export default Badge

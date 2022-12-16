import React, { PropsWithoutRef, RefAttributes, useMemo } from "react"

import { CSS } from "@/theme/stitches.config"
import clsx from "@/utils/clsx"
import { Wrap } from "@/utils/prop-types"
import withDefaults from "@/utils/with-defaults"

import GridBasicItem, { GridItemProps } from "./grid-item"

interface Props {
  gap?: number
  wrap?: Wrap
  className?: string
  css?: CSS
}

const defaultProps = {
  gap: 0,
  wrap: "wrap" as Wrap,
  className: "",
}

export type GridContainerProps = Props &
  Partial<typeof defaultProps> &
  GridItemProps

const GridContainer = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<GridContainerProps>
>(({ gap, wrap, css, children, className, ...props }, ref) => {
  const gapUnit = useMemo(() => {
    return `calc(${gap} * $space$3)`
  }, [gap])

  return (
    <GridBasicItem
      ref={ref}
      className={clsx("devui-grid-container", className)}
      css={{
        $$gridGapUnit: gapUnit,
        display: "flex",
        flexWrap: wrap,
        boxSizing: "border-box",
        margin: "calc(-1 * $$gridGapUnit)",
        width: "calc(100% + $$gridGapUnit * 2)",
        ...(css as any),
      }}
      {...props}
    >
      {children}
    </GridBasicItem>
  )
})

GridContainer.displayName = "DevUI.GridContainer"
GridContainer.toString = () => ".devui-grid-container"

type GridContainerComponent<
  T,
  P = Record<string, unknown>
> = React.ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>

export default withDefaults(
  GridContainer,
  defaultProps
) as GridContainerComponent<HTMLDivElement, GridContainerProps>

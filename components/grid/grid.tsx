import React, { PropsWithoutRef, RefAttributes } from "react"

import GridContainer from "./grid-container"
import GridBasicItem, { GridItemProps } from "./grid-item"

export type GridProps = GridItemProps

const Grid = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<GridProps>
>(({ children, css, ...props }, ref) => {
  return (
    <GridBasicItem ref={ref} css={{ ...(css as any) }} {...props}>
      {children}
    </GridBasicItem>
  )
})

Grid.displayName = "DevUI.Grid"
Grid.toString = () => ".devui-grid"

type GridComponent<
  T,
  P = Record<string, unknown>
> = React.ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> & {
  Container: typeof GridContainer
}

export default Grid as GridComponent<HTMLDivElement, GridProps>

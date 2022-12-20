import React, { useMemo } from "react"

import { CSS } from "@/theme/stitches.config"
import { setChildrenIndex } from "@/utils/collections"
import useCurrentState from "@/utils/use-current-state"
import withDefaults from "@/utils/with-defaults"

import Collapse from "./collapse"
import { CollapseConfig, CollapseContext } from "./collapse-context"
import {
  CollapseGroupVariantsProps,
  StyledCollapseGroup,
} from "./collapse.styles"

interface Props {
  accordion?: boolean
  animated?: boolean
  divider?: boolean
  onChange?: (index?: number | undefined, value?: boolean) => void
  as?: keyof JSX.IntrinsicElements
}

const defaultProps = {
  accordion: true,
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type CollapseGroupProps = Props &
  NativeAttrs &
  CollapseGroupVariantsProps & { css?: CSS }

const CollapseGroup: React.FC<React.PropsWithChildren<CollapseGroupProps>> = ({
  children,
  accordion,
  animated,
  divider,
  onChange,
  ...props
}) => {
  const [state, setState, stateRef] = useCurrentState<Array<number>>([])

  const updateValues = (currentIndex: number, nextState: boolean) => {
    const hasChild = stateRef.current.find(val => val === currentIndex)

    onChange && onChange(currentIndex, nextState)
    if (accordion) {
      if (nextState) return setState([currentIndex])

      return setState([])
    }
    if (nextState) {
      // In a few cases, the user will set Collapse Component state manually.
      // If the user incorrectly set the state, Group component should ignore it.
      /* istanbul ignore if */
      if (hasChild) return

      return setState([...stateRef.current, currentIndex])
    }
    setState(stateRef.current.filter(item => item !== currentIndex))
  }

  const initialValue = useMemo<CollapseConfig>(
    () => ({
      values: state,
      updateValues,
      divider,
      animated,
    }),
    [state.join(",")]
  )

  const hasIndexChildren = useMemo(
    () => setChildrenIndex(children, [Collapse]),
    [children]
  )

  return (
    <CollapseContext.Provider value={initialValue}>
      <StyledCollapseGroup {...props}>{hasIndexChildren}</StyledCollapseGroup>
    </CollapseContext.Provider>
  )
}

CollapseGroup.toString = () => ".devui-collapse-group"

export default withDefaults(CollapseGroup, defaultProps)

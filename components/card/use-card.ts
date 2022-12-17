import React, { useCallback } from "react"

import type { FocusRingAria } from "@react-aria/focus"
import { useFocusRing } from "@react-aria/focus"
import { usePress } from "@react-aria/interactions"
import { useHover } from "@react-aria/interactions"
import { mergeProps } from "@react-aria/utils"
import type {
  FocusableProps,
  PressEvent,
  PressEvents,
} from "@react-types/shared"

import { useDOMRef } from "@/utils/dom"
import type { CardVariants, NormalWeights } from "@/utils/prop-types"
import type { ReactRef } from "@/utils/refs"
import useDrip from "@/utils/use-drip"

interface Props extends PressEvents, FocusableProps {
  ref: ReactRef<HTMLDivElement | null>
  variant?: CardVariants
  borderWeight?: NormalWeights
  isPressable?: boolean
  isHoverable?: boolean
  disableRipple?: boolean
  disableAnimation?: boolean
  /** Whether text selection should be enabled on the pressable element. */
  allowTextSelectionOnPress?: boolean
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type UseCardProps = Props & NativeAttrs

interface IFocusRingAria extends FocusRingAria {
  focusProps: Omit<React.HTMLAttributes<HTMLElement>, "css">
}

/**
 * @internal
 */
export const useCard = (props: UseCardProps) => {
  const {
    ref,
    disableAnimation = false,
    disableRipple = false,
    variant = "shadow",
    isHoverable = false,
    borderWeight = "light",
    isPressable = false,
    onClick,
    onPress,
    autoFocus,
    allowTextSelectionOnPress = true,
    ...otherProps
  } = props

  const cardRef = useDOMRef<HTMLDivElement>(ref)

  const { onClick: onDripClickHandler, ...dripBindings } = useDrip(
    false,
    cardRef
  )

  const handleDrip = (e: React.MouseEvent<HTMLButtonElement> | PressEvent) => {
    if (!disableAnimation && !disableRipple && cardRef.current) {
      onDripClickHandler(e)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isPressable) {
      return
    }
    handleDrip(e)
    onClick?.(e)
  }

  const handlePress = (e: PressEvent) => {
    if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
      handleDrip(e)
      onClick?.(e as any)
    }
    onPress?.(e)
  }

  const { isPressed, pressProps } = usePress({
    isDisabled: !isPressable,
    onPress: handlePress,
    allowTextSelectionOnPress,
    ...otherProps,
  })

  const { hoverProps, isHovered } = useHover({
    isDisabled: !isHoverable,
    ...otherProps,
  })

  const { isFocusVisible, focusProps }: IFocusRingAria = useFocusRing({
    autoFocus,
  })

  pressProps.onClick = handleClick

  const getCardProps = useCallback(
    (props = {}) => {
      return {
        ...mergeProps(
          isPressable ? { ...pressProps, ...focusProps } : {},
          isHoverable ? hoverProps : {},
          otherProps,
          props
        ),
      }
    },
    [isPressable, isHoverable, pressProps, focusProps, hoverProps, otherProps]
  )

  return {
    cardRef,
    variant,
    borderWeight,
    isPressable,
    isHovered,
    isPressed,
    disableAnimation,
    disableRipple,
    dripBindings,
    onDripClickHandler,
    isFocusVisible,
    getCardProps,
  }
}

export type UseCardReturn = ReturnType<typeof useCard>

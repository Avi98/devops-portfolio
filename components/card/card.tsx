import type { ReactNode } from "react"
import React, { PropsWithoutRef, RefAttributes } from "react"

import { CSS } from "@/theme/stitches.config"
import { __DEV__ } from "@/utils/assertion"
import Drip from "@/utils/drip"

import Divider from "../divider"
import Image from "../image"
import {
  StyledCardBody as CardBody,
  StyledCardFooter as CardFooter,
  StyledCardHeader as CardHeader,
  StyledCard,
} from "./card.styles"
import type { UseCardProps } from "./use-card"
import { useCard } from "./use-card"

interface Props extends Omit<UseCardProps, "ref"> {
  children: ReactNode | ReactNode[]
  as?: keyof JSX.IntrinsicElements
}

export type CardProps = Props & { css?: CSS }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ ...cardProps }, ref: React.Ref<HTMLDivElement | null>) => {
    const { as, css, children, ...otherProps } = cardProps

    const {
      cardRef,
      variant,
      isFocusVisible,
      isPressable,
      isPressed,
      disableAnimation,
      disableRipple,
      borderWeight,
      isHovered,
      getCardProps,
      dripBindings,
    } = useCard({ ...otherProps, ref })

    return (
      <StyledCard
        ref={cardRef}
        as={as}
        borderWeight={borderWeight}
        css={css as any}
        disableAnimation={disableAnimation}
        isFocusVisible={isFocusVisible}
        isHovered={isHovered}
        isPressable={isPressable}
        isPressed={isPressed}
        role={isPressable ? "button" : "section"}
        tabIndex={isPressable ? 0 : -1}
        variant={variant}
        {...getCardProps()}
      >
        {isPressable && !disableAnimation && !disableRipple && (
          <Drip {...dripBindings} />
        )}
        {children}
      </StyledCard>
    )
  }
)

type CardComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
  Image: typeof Image
  Divider: typeof Divider
}

if (__DEV__) {
  Card.displayName = "DevUI.Card"
}

Card.toString = () => ".devui-card"

export default Card as CardComponent<HTMLDivElement, CardProps>

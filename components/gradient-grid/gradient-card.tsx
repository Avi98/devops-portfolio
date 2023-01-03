import Image from "next/image"
import { FC } from "react"

import clsx from "clsx"

import {
  StyledGradientCard,
  StyledGradientCardLink,
  StyledGradientCardProps,
} from "./gradient-card.styles"

interface Props {
  id?: string
  title: string
  description?: string
  icon?: string | any
  image?: string | any
  type?: "text" | "image"
}

export type GradientCardProps = Props & StyledGradientCardProps

export const GradientCard: FC<GradientCardProps> = ({ ...props }) => {
  return (
    <StyledGradientCardLink
      href={`/search-engine-optimization/#${props.id}`}
      title={props.title}
    >
      <div aria-hidden="true" className={clsx("card_gradient")} />
      <StyledGradientCard {...props}>
        {props.type === "text" && (
          <>
            <Image alt={props.title} height={48} src={props.image} width={48} />
            <span className={clsx("card_title")}>{props.title}</span>
          </>
        )}
        {props.type === "image" && (
          <Image alt={props.title} height={64} src={props.image} width={178} />
        )}
      </StyledGradientCard>
    </StyledGradientCardLink>
  )
}

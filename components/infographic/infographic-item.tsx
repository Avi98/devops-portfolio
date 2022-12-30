import { FC } from "react"

import { InfographicProps as Props } from "@/types/infographic"

import Window from "../window"
import {
  StyledInfographic,
  StyledInfographicContent,
  StyledInfographicDescription,
  StyledInfographicImage,
  StyledInfographicProps,
  StyledInfographicTitle,
} from "./infographic.styles"

export type InfographicProps = Props & StyledInfographicProps

export const InfographicItem: FC<InfographicProps> = ({ ...props }) => {
  return (
    <StyledInfographic className="infographic__item" id={props.id}>
      <StyledInfographicContent className="infographic__content">
        <StyledInfographicTitle className="infographic__title">
          {props.title}
        </StyledInfographicTitle>
        {props.description.map(desc => (
          <StyledInfographicDescription
            key={`${props.id} description`}
            className="infographic__description"
          >
            {desc}
          </StyledInfographicDescription>
        ))}
      </StyledInfographicContent>
      <StyledInfographicContent
        className="infographic__content"
        position="right"
      >
        <Window>
          <StyledInfographicImage
            alt={props.image.alt}
            className="infographic__image"
            height={272}
            src={props.image.src}
            width={504}
          />
        </Window>
      </StyledInfographicContent>
    </StyledInfographic>
  )
}

InfographicItem.toString = () => ".devui-infographic__item"

export default InfographicItem

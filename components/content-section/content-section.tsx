import { FC } from "react"

import clsx from "clsx"

import { ContentSectionProps } from "@/types/content-section"

import {
  StyledContent,
  StyledContentImage,
  StyledContentSection,
  StyledContentText,
  StyledContentTitle,
} from "./content-section.styles"
import { type ContentSectionProps as Props } from "./content-section.styles"

export type ContentProps = Props & ContentSectionProps

const ContentSection: FC<ContentProps> = ({ children, ...props }) => {
  return (
    <StyledContentSection
      className={clsx("content-section")}
      position={props.position}
    >
      <StyledContent className={clsx("content-section__content")}>
        <StyledContentTitle className={clsx("content-section__title")}>
          {props.title}
        </StyledContentTitle>
        <StyledContentText className={clsx("content-section__text")}>
          {props.description}
        </StyledContentText>
      </StyledContent>
      <StyledContent className={clsx("content-section__content")}>
        {props.gradient && (
          <div className={clsx("content-section__gradient")} />
        )}
        <StyledContentImage
          alt={props.image?.alt}
          className={clsx("content-section__image")}
          height={400}
          src={props.image?.src}
          width={640}
        />
      </StyledContent>
    </StyledContentSection>
  )
}

ContentSection.toString = () => ".devui-content-section"

export default ContentSection

import { FC } from "react"

import { PortfolioItemProps } from "@/types/portfolio-item"

import Button from "../button"
import {
  StyledPortfolioImage,
  StyledPortfolioItem,
  StyledPortfolioProps,
} from "./portfolio.styles"

export type PortfolioProps = StyledPortfolioProps & PortfolioItemProps

const PortfolioItem: FC<PortfolioProps> = ({ ...props }) => {
  const handlePortfolioItem = () => {
    window.open(props.url, "_blank")
  }

  return (
    <StyledPortfolioItem
      className="portfolio-item"
      onClick={handlePortfolioItem}
    >
      <div className="portfolio-item__content">
        <h2 className="portfolio-item__title">{props.title}</h2>
        <Button
          className="portfolio-item__button"
          css={{
            bg: "$gray50",
            border: "1px solid",
            borderRadius: "4px",
          }}
          title={props.title}
          onClick={handlePortfolioItem}
        >
          {props.href}
        </Button>
      </div>
      <StyledPortfolioImage
        alt={props.alt}
        className="portfolio-item__image"
        height={280}
        src={props.image}
        width={550}
      />
    </StyledPortfolioItem>
  )
}
export default PortfolioItem

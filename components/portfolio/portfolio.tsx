import { FC } from "react"

import { PortfolioItemProps } from "@/types/portfolio-item"

import PortfolioItem from "./portfolio-item"
import { StyledPortfolio } from "./portfolio.styles"

interface Props {
  item: PortfolioItemProps[]
}

const Portfolio: FC<Props> = ({ item }) => {
  return (
    <StyledPortfolio id="our-work">
      {item.map(item => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </StyledPortfolio>
  )
}

export default Portfolio

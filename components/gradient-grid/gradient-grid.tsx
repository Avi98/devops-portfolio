import { FC } from "react"

import Container from "../container"
import { GradientCard, GradientCardProps } from "./gradient-card"
import { StyledGradientGrid } from "./gradient-card.styles"

interface Props {
  item: GradientCardProps[]
  size?: "x-small" | "small" | "medium" | "large"
}

const GradientGrid: FC<Props> = ({ item, size }) => {
  return (
    <Container css={{ maxWidth: "1048px", marginTop: "96px" }}>
      <StyledGradientGrid size={size}>
        {item.map(item => (
          <GradientCard key={item.title} size={size} {...item} />
        ))}
      </StyledGradientGrid>
    </Container>
  )
}

export default GradientGrid

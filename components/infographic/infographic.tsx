import { FC } from "react"

import Container from "../container"
import InfographicItem, { InfographicProps } from "./infographic-item"

interface Props {
  item: InfographicProps[]
  id?: string
  type?: "web-design" | "app-development" | "seo"
}

const Infographic: FC<Props> = ({ item }) => {
  return (
    <Container css={{ maxWidth: "1248px" }}>
      {item.map(item => (
        <InfographicItem key={item.title} {...item} />
      ))}
    </Container>
  )
}

Infographic.toString = () => ".devui-infographic"

export default Infographic

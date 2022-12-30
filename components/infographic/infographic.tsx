import { FC } from "react"

import Container from "../container"
import Section from "../section"
import InfographicItem, { InfographicProps } from "./infographic-item"

interface Props {
  item: InfographicProps[]
  id?: string
  type?: "web-design" | "app-development" | "seo"
}

const Infographic: FC<Props> = ({ item, id, type }) => {
  return (
    <Section border="bottom" id={id} type={type}>
      <Container css={{ maxWidth: "1248px" }}>
        {item.map(item => (
          <InfographicItem key={item.title} {...item} />
        ))}
      </Container>
    </Section>
  )
}

Infographic.toString = () => ".devui-infographic"

export default Infographic

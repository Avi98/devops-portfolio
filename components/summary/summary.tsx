import { FC } from "react"

import { SummaryItemProps } from "@/types/summary-item"

import Container from "../container"
import Section from "../section"
import SummaryItem from "./summary-item"
import { StyledSummaryList } from "./summary.styles"

interface Props {
  item: SummaryItemProps[]
  type?: "web-design" | "app-development" | "seo"
  id?: string
}

const SummarySection: FC<Props> = ({ item, type, id }) => {
  return (
    <Section
      border="top"
      css={{ backgroundColor: "$background" }}
      id={id}
      type={type}
    >
      <Container css={{ maxWidth: "1248px" }}>
        <StyledSummaryList>
          {item.map(item => (
            <SummaryItem key={item.title} {...item} />
          ))}
        </StyledSummaryList>
      </Container>
    </Section>
  )
}

export default SummarySection

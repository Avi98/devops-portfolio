import { FC } from "react"

import { TestimonialProps } from "@/types/testimonial"

import Container from "../container"
import Section from "../section"
import TestimonialItem from "./testimonial-item"
import { StyledTestimonialWrapper } from "./testimonial.styles"

interface Props {
  item: TestimonialProps[]
  type?: "web-design" | "app-development" | "seo"
  id?: string
}

const TestimonialSection: FC<Props> = ({ item, type, id }) => {
  return (
    <Section border="bottom" id={id} type={type}>
      <Container css={{ maxWidth: "1248px" }}>
        <StyledTestimonialWrapper>
          {item.map(item => (
            <TestimonialItem key={item.quote} {...item} />
          ))}
        </StyledTestimonialWrapper>
      </Container>
    </Section>
  )
}

TestimonialSection.toString = () => ".devui-testimonial-section"

export default TestimonialSection

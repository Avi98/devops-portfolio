import { FC } from "react"

import { TestimonialProps as Props } from "@/types/testimonial"

import {
  StyledTestimonial,
  StyledTestimonialAuthor,
  StyledTestimonialAuthorTitle,
  StyledTestimonialAuthorWrapper,
  StyledTestimonialCompany,
  StyledTestimonialContent,
  StyledTestimonialImage,
  StyledTestimonialProps,
} from "./testimonial.styles"

export type TestimonialProps = Props & StyledTestimonialProps

const TestimonialItem: FC<TestimonialProps> = ({ quote, author, company }) => {
  return (
    <StyledTestimonial>
      <StyledTestimonialContent>{quote}</StyledTestimonialContent>
      <StyledTestimonialAuthorWrapper>
        <StyledTestimonialImage
          alt={`${author.name} from ${company}`}
          height={75}
          src={author.image}
          width={75}
        />
        <StyledTestimonialAuthor>
          <StyledTestimonialAuthorTitle>
            {author.name}
          </StyledTestimonialAuthorTitle>
          <StyledTestimonialCompany>{company}</StyledTestimonialCompany>
        </StyledTestimonialAuthor>
      </StyledTestimonialAuthorWrapper>
    </StyledTestimonial>
  )
}

TestimonialItem.toString = () => ".devui-testimonial"

export default TestimonialItem

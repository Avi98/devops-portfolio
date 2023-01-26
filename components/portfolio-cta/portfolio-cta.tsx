import { FC } from "react"

import Button from "../button"
import { LinkIcon } from "../link/icon"
import {
  StyledPortfolio,
  StyledPortfolioImage,
  StyledPortfolioItem,
} from "../portfolio/portfolio.styles"
import {
  PortfolioCTA,
  PortfolioCTAContainer,
  PortfolioCTALink,
  PortfolioCTAMeta,
  PortfolioCTASubtitle,
  PortfolioCTATitle,
} from "./portfolio-cta.styles"

interface PortfolioCTAProps {
  title: string
  id: string
  image: string
  alt: string
}

interface Props {
  title: string
  subtitle: string
  href: string
  item: PortfolioCTAProps[]
}

const PortfolioCTAItem: FC<PortfolioCTAProps> = ({ title, id, image, alt }) => {
  return (
    <StyledPortfolioItem className="portfolio-cta__item">
      <StyledPortfolioImage
        alt={alt}
        className="portfolio-cta__image"
        height={280}
        id={id}
        src={image}
        title={title}
        width={550}
      />
    </StyledPortfolioItem>
  )
}

const PortfolioCta: FC<Props> = ({ title, subtitle, href, item }) => {
  return (
    <PortfolioCTALink href={href} title="Buchanan DevOps Work Portfolio">
      <PortfolioCTA
        css={{
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div aria-hidden="true" className="portfolio-cta__radial" />
        <PortfolioCTAContainer>
          <PortfolioCTAMeta>
            <PortfolioCTATitle>{title}</PortfolioCTATitle>
            <PortfolioCTASubtitle>{subtitle}</PortfolioCTASubtitle>
          </PortfolioCTAMeta>
          <StyledPortfolio
            css={{
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            {item.map(item => (
              <PortfolioCTAItem key={item.id} {...item} />
            ))}
          </StyledPortfolio>
          <Button
            bordered
            as="a"
            borderWeight="light"
            css={{
              marginTop: "50px",
              color: "$gray900",
              fontWeight: "400",
              background: "$gray50",
              borderRadius: "4px",
            }}
            href={href}
            iconRight={<LinkIcon />}
            size="md"
          >
            View More
          </Button>
        </PortfolioCTAContainer>
      </PortfolioCTA>
    </PortfolioCTALink>
  )
}

export default PortfolioCta

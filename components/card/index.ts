import Divider from "../divider"
import Image from "../image"
import Card from "./card"
import {
  StyledCardBody as CardBody,
  StyledCardFooter as CardFooter,
  StyledCardHeader as CardHeader,
} from "./card.styles"

export type { CardProps } from "./card"

export {
  StyledCard,
  StyledCardHeader,
  StyledCardFooter,
  StyledCardBody,
} from "./card.styles"
export type { CardFooterVariantsProps, CardVariantsProps } from "./card.styles"

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = Image
Card.Divider = Divider

export default Card

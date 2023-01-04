import { FC } from "react"

import { PortfolioItemProps } from "@/types/portfolio-item"

import Modal from "../modal"
import useModal from "../modal/use-modal"
import {
  StyledModalImage,
  StyledPortfolioImage,
  StyledPortfolioItem,
  StyledPortfolioProps,
} from "./portfolio.styles"

export type PortfolioProps = StyledPortfolioProps & PortfolioItemProps

const PortfolioItem: FC<PortfolioProps> = ({ ...props }) => {
  const { setVisible, bindings } = useModal()
  return (
    <>
      <StyledPortfolioItem
        className="portfolio-item"
        onClick={() => setVisible(true)}
      >
        <div className="portfolio-item__content">
          <h2 className="portfolio-item__title">{props.title}</h2>
        </div>
        <StyledPortfolioImage
          alt={props.alt}
          className="portfolio-item__image"
          height={280}
          src={props.image}
          width={550}
        />
      </StyledPortfolioItem>
      <Modal
        aria-labelledby={props.title}
        width="fit-content"
        {...bindings}
        css={{
          padding: "0px",

          boxShadow: "none",
        }}
      >
        <Modal.Body
          css={{
            padding: "0px",
            borderRadius: "11px",
          }}
        >
          <StyledModalImage
            alt={props.alt}
            height={880}
            src={props.image}
            width={1550}
            onClick={() => setVisible(false)}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
export default PortfolioItem

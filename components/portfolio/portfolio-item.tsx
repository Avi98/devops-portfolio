import { FC } from "react"

import { PortfolioItemProps } from "@/types/portfolio-item"

import Button from "../button"
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

  const handlePortfolioItem = () => {
    window.open(props.url, "_blank")
  }

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
            position: "relative",
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
        <Modal.Footer>
          <Button.Group
            css={{
              width: "100%",
              zIndex: 1,
              justifyContent: "center",
            }}
          >
            <Button onClick={() => setVisible(false)}>Previous</Button>
            <Button onClick={handlePortfolioItem}>{props.url}</Button>
            <Button onClick={() => setVisible(false)}>Next</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default PortfolioItem

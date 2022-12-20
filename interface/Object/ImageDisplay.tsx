import { FC, useState } from "react"

import clsx from "clsx"

import {
  ChevronLeft,
  ChevronRight,
  Image,
  Modal,
  PageNav,
  StyledButton,
  useModal,
} from "@/components"
import { useMediaQuery } from "@/hooks/use-media-query"
import { CSS } from "@/theme/stitches.config"
import { type ItemProps } from "@/types/item"

type ImageDisplayProps = ItemProps & { css?: CSS; items: ItemProps[] }

const ImageDisplay: FC<ImageDisplayProps> = ({
  title,
  id,
  description,
  items,
  css,
  ...props
}) => {
  const [activeItem, setActiveItem] = useState(items[0])
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMediaQuery(960)
  const { setVisible, bindings } = useModal()

  const handleChange = (value: any) => {
    setActiveItem(items[value - 1])
  }

  return (
    <>
      <StyledButton
        onClick={() => setVisible(true)}
        color="success"
        css={{ height: "fit-content", px: "0px" }}
      >
        <Image
          src={`/analytics/${activeItem.id}.avif`}
          alt={activeItem.title}
        />
      </StyledButton>
      <Modal
        scroll
        width="100%"
        blur
        aria-labelledby={`${activeItem.id}-title`}
        {...bindings}
        css={{
          padding: "0px",
          borderRadius: "0px",
          boxShadow: "none",
        }}
      >
        <Modal.Body
          css={{
            padding: "0px",
            borderRadius: "11px",
          }}
        >
          <PageNav
            auto
            title={activeItem.prev}
            onClick={handleChange}
            selector="left"
          >
            <ChevronLeft size={24} fill="#16181A" />
          </PageNav>
          <Image
            onClick={() => setVisible(false)}
            src={`/analytics/${activeItem.id}.avif`}
            alt={activeItem.title}
            className={clsx({
              active: activeItem.id === activeItem.id,
            })}
            css={{
              mb: "0px",
            }}
          />
          <PageNav
            auto
            title={activeItem.next}
            onClick={handleChange}
            selector="right"
          >
            <ChevronRight size={24} fill="#16181A" />
          </PageNav>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ImageDisplay

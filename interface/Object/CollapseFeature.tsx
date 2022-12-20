import React, { FC, useState } from "react"

import clsx from "clsx"

import { Collapse, Text, useModal } from "@/components"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { CSS } from "@/theme/stitches.config"
import { type ItemProps } from "@/types/item"

type CollapseProps = ItemProps & { css?: CSS; items: ItemProps[] }

const CollapseFeature: FC<CollapseProps> = ({
  title,
  id,
  description,
  items,
  css,
  ...props
}) => {
  const [activeItem, setActiveItem] = useState(items[0])
  const { setVisible, bindings } = useModal()

  const handleChange = (value: any) => {
    setActiveItem(items[value - 1])
  }

  return (
    <Collapse.Group accordion onChange={handleChange}>
      {items.map(({ ...props }) => (
        <Collapse
          key={props.id}
          title={props.title}
          showArrow={false}
          className={clsx({ active: activeItem.id === props.id })}
          expanded={props.id === items[0].id}
          css={{
            br: "$lg",
            border: "none",
            p: "0 $lg",
            margin: "$md 0",
            "& .devui-collapse-title": {
              color: "$accents4",
              fontSize: "1.7rem",
              transition: "color 0.2s ease-in-out",
            },
            "&.active": {
              bf: "saturate(180%) blur(14px)",
              bg: "rgba(255, 255, 255, 0.05)",
              boxShadow: "$md",
            },
            "&.active .devui-collapse-view": {
              pb: 0,
            },
            "&.active .devui-collapse-title": {
              color: "$text",
            },
            "&:hover": {
              "&:not(.active) .devui-collapse-title": {
                color: "$accents7",
              },
            },
          }}
        >
          <Text
            css={{
              fs: "1.4rem",
              color: "$accents6",
              "@xsMax": {
                fs: "1rem",
              },
            }}
          >
            {props.description}
          </Text>
        </Collapse>
      ))}
    </Collapse.Group>
  )
}

export default CollapseFeature

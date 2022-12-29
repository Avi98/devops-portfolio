import dynamic from "next/dynamic"
import { FC } from "react"

import { Container } from "@/components"
import webDesign from "@/content/web-design"

const ContentSection = dynamic(() => import("@/components/content-section"))

const WebDesignContent: FC = () => {
  return (
    <Container css={{ maxWidth: "1248px" }}>
      {webDesign.contentInfo.map((item, index) => {
        return (
          <ContentSection
            key={index}
            position={item.position as "left" | "right"}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )
      })}
    </Container>
  )
}

export default WebDesignContent

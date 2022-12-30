import dynamic from "next/dynamic"
import { FC } from "react"

import Container from "@/components/container"
import seo from "@/content/seo"

const ContentSection = dynamic(() => import("@/components/content-section"))

const SeoContent: FC = () => {
  return (
    <Container css={{ maxWidth: "1248px" }}>
      {seo.contentInfo.map((item, index) => {
        return (
          <ContentSection
            key={index}
            position={item.position as "left" | "right"}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )
      })}
    </Container>
  )
}

export default SeoContent

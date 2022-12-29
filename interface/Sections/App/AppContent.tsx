import dynamic from "next/dynamic"
import { FC } from "react"

import { Container } from "@/components"
import appContent from "@/content/app-development"

const ContentSection = dynamic(() => import("@/components/content-section"))

const AppContent: FC = () => {
  return (
    <Container css={{ maxWidth: "1248px" }}>
      {appContent.contentInfo.map((item, index) => {
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

export default AppContent

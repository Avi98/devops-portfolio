import dynamic from "next/dynamic"
import { FC } from "react"

import faqInfo from "@/config/faq_schema.json"

const Faq = dynamic(() => import("@/components/faq/faq"), { ssr: false })
const FaqItem = dynamic(() => import("@/components/faq/faqItem"), {
  ssr: false,
})

function createMarkup() {
  return { __html: faqInfo }
}

const SeoFaq: FC = () => {
  const faq = createMarkup()
  return (
    <Faq title="Frequently Asked Questions" css={{ mb: "$xl" }}>
      {faq.__html.mainEntity.map((item: any) => (
        <FaqItem key={item["@type"]} {...item} />
      ))}
    </Faq>
  )
}

export default SeoFaq

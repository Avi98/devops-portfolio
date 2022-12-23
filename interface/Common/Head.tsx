import { useRouter } from "next/router"
import type { FC } from "react"

import data_schema from "@/config/data_schema.json"
import faqInfo from "@/config/faq_schema.json"

import SEO from "./SEO"

function getSchema() {
  const pathname = useRouter().pathname
  switch (pathname) {
    case "/search-engine-optimization":
      return { faqInfo, data_schema }
    default:
      return data_schema
  }
}

const Head: FC = () => {
  const schema = getSchema()
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </SEO>
  )
}

export default Head

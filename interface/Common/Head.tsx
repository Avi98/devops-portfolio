import type { FC } from "react"

import data_schema from "@/config/data_schema.json"

import SEO from "./SEO"

const Head: FC = () => {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data_schema) }}
      />
    </SEO>
  )
}

export default Head

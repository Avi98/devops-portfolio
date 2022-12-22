import type { FC } from "react"

import schema from "@/config/seo_meta.json"

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </SEO>
  )
}

export default Head

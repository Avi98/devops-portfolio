import Script from "next/script"
import type { FC } from "react"

import seo_meta from "@/config/seo_meta.json"
import { gtagUrl, renderSnippet } from "@/lib/analytics"

import SEO from "./SEO"

const Head: FC = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <Script
        type="application/ld+json"
        key="schema-json-ld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo_meta) }}
      />{" "}
      <Script async src={gtagUrl} />
      <Script dangerouslySetInnerHTML={{ __html: renderSnippet() as string }} />
    </SEO>
  )
}

export default Head

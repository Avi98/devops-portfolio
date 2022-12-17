import type { FC } from "react"

import SEO from "./SEO"

const Head: FC = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </SEO>
  )
}

export default Head

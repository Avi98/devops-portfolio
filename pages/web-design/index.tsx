import { NextPage } from "next"

import Hero from "@/components/hero"

const Page: NextPage = () => {
  return (
    <Hero
      description="I design and build websites that are fast, secure, and easy to use."
      image="/content/wdhero.svg"
      subtitle="Designer."
      title="Website"
      type={"web-design"}
    />
  )
}

export default Page
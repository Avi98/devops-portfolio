import { NextPage } from "next"

import { Hero } from "@/components/hero/hero"

const Page: NextPage = () => {
  return (
    <Hero
      description={
        "We build full stack applications with incredible performance and love for the craft. If you've made it this far, you're ready to unlock your full potential."
      }
      image={"/content/fshero.svg"}
      subtitle={"Development"}
      title={"Full Stack App"}
      type={"app-development"}
    />
  )
}

export default Page

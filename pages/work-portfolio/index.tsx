import { NextPage } from "next"
import dynamic from "next/dynamic"

import portfolio from "@/content/portfolio"

const Hero = dynamic(() => import("@/components/hero"))
const Portfolio = dynamic(() => import("@/components/portfolio"))

const Page: NextPage = () => {
  return (
    <>
      <Hero {...portfolio.hero} />
      <Portfolio item={[...portfolio.portfolio]} />
    </>
  )
}

export default Page

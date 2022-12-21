import { NextPage } from "next"
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/hero"))

const Page: NextPage = () => {
  return (
    <Hero
      description="Legal notices for the website."
      subtitle={"Legal Notices"}
      title="SLA. Terms. Privacy."
      type={"legal"}
    />
  )
}

export default Page

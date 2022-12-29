import dynamic from "next/dynamic"
import { FC } from "react"

const Section = dynamic(() => import("@/components/section"))

const SeoProcess: FC = () => {
  return <Section></Section>
}

export default SeoProcess

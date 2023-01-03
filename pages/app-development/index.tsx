import { NextPage } from "next"
import dynamic from "next/dynamic"

import appInfo from "@/content/app-development"
import SEO from "@/interface/Common/SEO"

const Hero = dynamic(() => import("@/components/hero"))
const Summary = dynamic(() => import("@/components/summary"))
const AppContent = dynamic(() => import("@/interface/Sections/App/AppContent"))

const Page: NextPage = () => {
  return (
    <>
      <Hero {...appInfo.hero} />
      <Summary
        id="cutting-edge-tech"
        item={appInfo.summaryInfo}
        type="app-development"
      />
      <AppContent />
      <SEO {...appInfo.seo} />
    </>
  )
}

export default Page

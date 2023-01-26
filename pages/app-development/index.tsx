import { NextPage } from "next"
import dynamic from "next/dynamic"

import appInfo from "@/content/app-development"
import SEO from "@/interface/Common/SEO"

const Hero = dynamic(() => import("@/components/hero"))
const Summary = dynamic(() => import("@/components/summary"))
const AppContent = dynamic(() => import("@/interface/Sections/App/AppContent"))
const PortfolioCta = dynamic(() => import("@/components/portfolio-cta"))
const FormSection = dynamic(
  () => import("@/interface/Sections/Shared/FormSection")
)

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
      <PortfolioCta item={[...appInfo.portfolioCta]} {...appInfo.cta} />
      <FormSection {...appInfo.form} />
      <SEO {...appInfo.seo} />
    </>
  )
}

export default Page

import { NextPage } from "next"
import dynamic from "next/dynamic"

import contact from "@/content/contact"

const FormSection = dynamic(
  () => import("@/interface/Sections/Shared/FormSection")
)

const Page: NextPage = () => {
  return <FormSection {...contact.form} />
}

export default Page

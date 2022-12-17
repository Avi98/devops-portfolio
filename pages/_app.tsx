import type { AppProps } from "next/app"
import dynamic from "next/dynamic"

import { Inter } from "@next/font/google"

import { DevOpsInterface } from "@/theme"

import { useAnalytics } from "../lib/analytics"

const Page = dynamic(() => import("../interface/Page"))
const inter = Inter({ subsets: ["latin"] })

const App = ({ Component, pageProps }: AppProps) => {
  useAnalytics()
  return (
    <DevOpsInterface>
      <Page className={inter.className}>
        <Component {...pageProps} />
      </Page>
    </DevOpsInterface>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
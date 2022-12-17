import Head from "next/head"
import Script from "next/script"
import { FC, Fragment, ReactNode } from "react"

import config from "@/config/seo_meta.json"
import packageData from "@/package.json"

const storeUrl =
  process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL
const storeBaseUrl = storeUrl ? `https://${storeUrl}` : null

interface OgImage {
  url?: string
  width?: string
  height?: string
  alt?: string
}

interface Props {
  title?: string
  description?: string
  keywords?: string
  robots?: string
  openGraph?: {
    title?: string
    type?: string
    locale?: string
    description?: string
    site_name?: string
    url?: string
    images?: OgImage[]
  }
  children?: ReactNode
}

const ogImage = ({ url, width, height, alt }: OgImage, index: number) => {
  const imgUrl = storeBaseUrl ? new URL(url!, storeBaseUrl).toString() : url
  return (
    <Fragment key={`og:image:${index}`}>
      <meta
        key={`og:image:url:${index}`}
        property="og:image"
        content={imgUrl}
      />
      <meta
        key={`og:image:width:${index}`}
        property="og:image:width"
        content={width}
      />
      <meta
        key={`og:image:height:${index}`}
        property="og:image:height"
        content={height}
      />
      <meta
        key={`og:image:alt:${index}`}
        property="og:image:alt"
        content={alt}
      />
    </Fragment>
  )
}

const SEO: FC<Props> = ({
  title,
  description,
  openGraph,
  keywords,
  robots,
  children,
}) => {
  return (
    <Head>
      <title key="title">
        {title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}
      </title>
      <meta
        key="description"
        name="description"
        content={description || config.description}
      />
      <meta
        content={keywords?.toString() || config.keywords.toString()}
        name="keywords"
        key="keywords"
      />
      <meta content={packageData.author} name="author" key="author" />
      <meta
        content={packageData.displayName}
        name="application-name"
        key="application-name"
      />

      <meta
        content="yes"
        name="mobile-web-app-capable"
        key="mobile-web-app-capable"
      />
      <meta
        content="default"
        name="apple-mobile-web-app-status-bar-style"
        key="apple-mobile-web-app-status-bar-style"
      />
      <meta
        content={packageData.displayName}
        name="apple-mobile-web-app-title"
      />
      <meta
        content="telephone=yes"
        name="format-detection"
        key="format-detection"
      />
      <meta
        content="/browserconfig.xml"
        name="msapplication-config"
        key="msapplication-config"
      />
      <meta
        content="yes"
        name="msapplication-tap-highlight"
        key="msapplication-tap-highlight"
      />
      <meta
        content="#555"
        name="msapplication-TileColor"
        key="msapplication-TileColor"
      />
      <meta
        content="no"
        name="msapplication-tap-highlight"
        key="msapplication-tap-highlight"
      />
      <meta content="#000000" name="theme-color" key="theme-color" />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
        key="apple-touch-icon"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
        key="favicon-32x32"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
        key="favicon-16x16"
      />
      <link rel="manifest" href="/site.manifest.json" key="manifest" />
      <link
        color="#555"
        href="/safari-pinned-tab.svg"
        rel="mask-icon"
        key="mask-icon"
      />

      <meta
        key="og:type"
        property="og:type"
        content={openGraph?.type ?? config.openGraph.type}
      />
      <meta
        key="og:title"
        property="og:title"
        content={
          openGraph?.title ?? config.openGraph.title ?? title ?? config.title
        }
      />
      <meta
        key="og:keywords"
        property="og:keywords"
        content={keywords || config.keywords.toString()}
      />
      <meta
        key="og:description"
        property="og:description"
        content={
          openGraph?.description ??
          config.openGraph.description ??
          description ??
          config.description
        }
      />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={openGraph?.site_name ?? config.openGraph.site_name}
      />
      <meta
        key="og:url"
        property="og:url"
        content={openGraph?.url ?? config.openGraph.url}
      ></meta>
      {openGraph?.locale && (
        <meta key="og:locale" property="og:locale" content={openGraph.locale} />
      )}
      {openGraph?.images?.length
        ? openGraph.images.map((img, index) => ogImage(img, index))
        : ogImage(config.openGraph.images[0], 0)}
      {config.twitter.cardType && (
        <meta
          key="twitter:card"
          name="twitter:card"
          content={config.twitter.cardType}
        />
      )}
      {config.twitter.site && (
        <meta
          key="twitter:site"
          name="twitter:site"
          content={config.twitter.site}
        />
      )}
      {config.twitter.handle && (
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={config.twitter.handle}
        />
      )}
      {config.twitter.description && (
        <meta
          key="twitter:description"
          name="twitter:description"
          content={config.twitter.description}
        />
      )}
      {config.twitter.altText && (
        <meta
          key="twitter:image:alt"
          name="twitter:image:alt"
          content={config.twitter.altText}
        />
      )}
      <meta key="robots" name="robots" content={robots ?? "index,follow"} />
      <meta
        key="googlebot"
        name="googlebot"
        content={robots ?? "index,follow"}
      ></meta>

      {children}
    </Head>
  )
}

export default SEO

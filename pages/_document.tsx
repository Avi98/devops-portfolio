import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import React from "react"

import CssBaseline from "@/styles/css-baseline"

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html itemType="http://schema.org/WebPage" lang="en" >
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

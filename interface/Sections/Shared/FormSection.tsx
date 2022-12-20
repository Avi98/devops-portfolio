import dynamic from "next/dynamic"
import { FC, PropsWithChildren } from "react"

import { Grid, Section } from "@/components"

const ContactForm = dynamic(() => import("@/interface/Forms/ContactForm"))

interface Props {
  id?: string
  title: string
  image?: string
  description?: string
  type: "contact" | "request" | "seo"
}

const FormSection: FC<PropsWithChildren<Props>> = ({
  id,
  title,
  description,
  type,
  children,
}) => {
  return (
    <Section
      id={id}
      title={title}
      description={description}
      css={{
        textAlign: "-webkit-center",
      }}
    >
      <Grid.Container
        gap={3}
        css={{
          maxWidth: "1000px",
        }}
      >
        <Grid md={6} sm={6} xs={12}>
          {type === "contact" && <ContactForm />}
          {type === "request" && <h1>Request Form</h1>}
          {type === "seo" && <h1>SEO Form</h1>}
        </Grid>

        <Grid md={6} sm={6} xs={12}>
          <h1>Trust the experts</h1>
        </Grid>
      </Grid.Container>
    </Section>
  )
}

export default FormSection

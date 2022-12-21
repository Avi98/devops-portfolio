import dynamic from "next/dynamic"
import { FC, PropsWithChildren } from "react"

import { Grid, Section, StyledSectionSubtitle } from "@/components"
import menu from "@/content/menu"
import { useMediaQuery } from "@/hooks/use-media-query"

const ContactForm = dynamic(() => import("@/interface/Forms/ContactForm"))
const ContactCard = dynamic(() => import("@/interface/Object/ContactCard"))
const SocialCard = dynamic(() => import("@/interface/Object/SocialCard"))
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
  const isMobile = useMediaQuery(650)
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
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Grid md={7} sm={7} xs={12}>
          {type === "contact" && <ContactForm />}
          {type === "request" && <h1>Request Form</h1>}
          {type === "seo" && <h1>SEO Form</h1>}
        </Grid>

        <Grid
          md={5}
          sm={5}
          xs={12}
          css={{
            alignSelf: "center",
            textAlign: "-webkit-center",
          }}
        >
          {menu.contactInfo && (
            <ContactCard {...menu.contactInfo}>
              <SocialCard />
            </ContactCard>
          )}
        </Grid>
      </Grid.Container>
    </Section>
  )
}

export default FormSection

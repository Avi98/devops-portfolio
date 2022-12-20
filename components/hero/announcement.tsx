import { FC } from "react"

import { Badge, Link } from "@/components"
import { CSS, styled, VariantProps } from "@/theme/stitches.config"

export const StyledAnnouncement = styled("div", {
  display: "flex",
  direction: "row",
  align: "center",
  justify: "flex-start",
  gap: "12px",
  margin: "-56px -16px 0",
  borderRadius: "5px",
  border: "1px solid $accent3",
  padding: "$2 cacl($2 * 1.5)",
  fontSize: ".875rem",
  lineHeight: "1.25rem",
  fontWeight: "400",
  "@sm": {
    transform: "translateY(-16px)",
  },
  "& .p": {
    margin: "0",
    color: "$text",
  },
})

interface Props {
  status: "New" | "Updated" | "Coming Soon" | "Popular"
  text: string
  href: string
  hrefText: string
  variant?: string
}

type StyledAnnouncementProps = VariantProps<typeof StyledAnnouncement>

type AnnouncementProps = Props & StyledAnnouncementProps & { css?: CSS }

export const Announcement: FC<AnnouncementProps> = ({
  status,
  variant,
  text,
  href,
  hrefText,
  css,
  ...props
}) => {
  return (
    <StyledAnnouncement css={css} {...props}>
      <Badge>{status}</Badge>
      <p>
        {text} &nbsp;
        <Link href={href}>{hrefText}</Link>
      </p>
    </StyledAnnouncement>
  )
}

export default Announcement

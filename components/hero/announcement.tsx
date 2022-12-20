import { FC } from "react"

import clsx from "clsx"

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
  border: "1px solid #333333",
  padding: "8px 12px",

  lineHeight: "1.25rem",
  fontWeight: "400",
  marginBottom: "32px",
  "@sm": {
    transform: "translateY(-16px)",
  },
  "& p": {
    margin: "0",
    color: "$text",
    letterSpacing: "0.1px",
    fontSize: ".875rem",
  },
  "& a": {},
})

interface Props {
  status: "New" | "Updated" | "Coming Soon" | "Popular"
  text: string
  href: string
  hrefText: string
  variant?: string
  type: "web-design" | "app-development" | "seo" | "landing" | "default"
}

type StyledAnnouncementProps = VariantProps<typeof StyledAnnouncement>

type AnnouncementProps = Props &
  StyledAnnouncementProps & { css?: CSS; type?: string }

export const Announcement: FC<AnnouncementProps> = ({
  status,
  variant,
  text,
  href,
  type,
  hrefText,
  css,
  ...props
}) => {
  return (
    <StyledAnnouncement css={css} {...props}>
      <Badge
        className={clsx("announcement__badge", {
          "announment__badge--seo": type === "seo",
          "announment__badge--web-design": type === "web-design",
          "announment__badge--app-development": type === "app-development",
          "announment__badge--landing": type === "landing",
          "announment__badge--default": type === "default",
        })}
      >
        {status}
      </Badge>
      <p>
        {text} &nbsp;
        <Link href={href}>{hrefText}</Link>
      </p>
    </StyledAnnouncement>
  )
}

export default Announcement

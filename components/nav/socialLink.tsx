import Link from "next/link"
import { FC } from "react"

import { SocialLinkProps as Props } from "@/content/menu"
import { styled } from "@/theme/stitches.config"
import type { CSS, VariantProps } from "@/theme/stitches.config"

export const StyledSocialLink = styled(Link, {
  m: "0 6px",
  paddingTop: "5px",
  "& svg": {
    transition: "$default",
    fill: "#697177",
  },
  "&:hover": {
    "& svg": {
      opacity: 0.7,
    },
  },
})

type SocialLinkVariants = VariantProps<typeof StyledSocialLink>

type SocialLinkProps = SocialLinkVariants &
  Props & {
    css?: CSS
  }

const SocialLink: FC<SocialLinkProps> = ({ href, title, icon, css }) => {
  return (
    <StyledSocialLink
      css={css}
      href={href}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {icon}
    </StyledSocialLink>
  )
}

export default SocialLink

import Link from "next/link"
import { FC } from "react"

import { SocialLinkProps as Props } from "@/content/menu"
import { styled } from "@/theme/stitches.config"
import type { CSS, VariantProps } from "@/theme/stitches.config"
import clsx from "@/utils/clsx"

export const StyledSocialLink = styled("li", Link, {
  alignSelf: "baseline",
  paddingTop: "6px",
  m: "0 6px",
  "& svg": {
    transition: "$default",
    fill: "#697177",
  },
  "& .social-link__email": {
    "& svg": {
      fill: "var(--devui-colors-red600)",
    },
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

const SocialLink: FC<SocialLinkProps> = ({ href, id, title, icon, css }) => {
  const handleClick = () => {
    window.open(href, "_blank")
  }

  return (
    <StyledSocialLink
      className={clsx(`social-link__${id}`)}
      css={css}
      title={title}
      onClick={handleClick}
    >
      {icon}
    </StyledSocialLink>
  )
}

SocialLink.toString = () => ".devui-social-link"

export default SocialLink

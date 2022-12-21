import { FC } from "react"

import clsx from "clsx"

import { Link } from "@/components"
import menu from "@/content/menu"
import { CSS, styled, VariantProps } from "@/theme/stitches.config"

const StyledSocialCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "$lg",
  borderRadius: "$lg",
  boxShadow: "$md",
  bg: "$bg",

  "& .social-card__social-links": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& li": {
      margin: "0 $xs",
      "& a svg": {
        fill: "#697177",
      },
      "&:hover": {
        "& a svg": {
          opacity: 0.7,
        },
      },
    },
  },
})

interface Props {
  className?: string
  css?: CSS
  as?: keyof JSX.IntrinsicElements
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
type SocialCardVariants = VariantProps<typeof StyledSocialCard>

export type SocialCardProps = Props & NativeAttrs & SocialCardVariants

const SocialCard: FC<SocialCardProps> = ({ className, css, as, ...props }) => {
  return (
    <StyledSocialCard
      className={clsx("social-card", className)}
      css={css}
      as={as}
      {...props}
    >
      <ul className="social-card__social-links">
        {menu.socialLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </StyledSocialCard>
  )
}

export default SocialCard

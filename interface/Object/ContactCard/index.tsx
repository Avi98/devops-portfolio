import Image from "next/image"
import { FC } from "react"

import clsx from "clsx"

import { At, Link, Phone } from "@/components"
import { CSS, VariantProps } from "@/theme/stitches.config"

import { StyledContactCard } from "./contact-card.styles"

interface Props {
  className?: string
  css?: CSS
  avatar?: string
  name?: string
  title?: string
  email?: string
  phone?: {
    number?: string
    href?: string
  }
  locale?: {
    city?: string
    state?: string
    country?: string
  }
  as?: keyof JSX.IntrinsicElements
}

type ContactCardVariants = VariantProps<typeof StyledContactCard>
type NativeAttrs = Omit<React.PropsWithChildren, keyof Props>
type ContactCardProps = Props &
  ContactCardVariants &
  NativeAttrs & { url?: string }

const ContactCard: FC<ContactCardProps> = ({
  className,
  css,
  children,
  avatar,
  name,
  title,
  email,
  phone,
  as,
  locale,
  ...props
}: ContactCardProps) => {
  return (
    <StyledContactCard
      css={css}
      {...props}
      className={clsx(`contact-card`, className)}
    >
      <div className="contact-card__row">
        {avatar && (
          <Image
            width={150}
            height={150}
            className="contact-card__avatar"
            src={avatar}
            alt={`${name}`}
          />
        )}
        <div className="contact-card__stack">
          {name && <h3 className="contact-card__name">{name}</h3>}
          {title && <h4 className="contact-card__title">{title}</h4>}
          {phone && (
            <Link className="contact-card__phone" href={`tel:${phone.href}`}>
              {phone.number}
            </Link>
          )}
        </div>
        {children}
      </div>
    </StyledContactCard>
  )
}

export default ContactCard

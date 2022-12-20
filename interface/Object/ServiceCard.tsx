import { useRouter } from "next/router"
import React from "react"

import { styled } from "@/theme/stitches.config"
import type { CSS, VariantProps } from "@/theme/stitches.config"

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  image?: string
  slug?: string
}

const Component = styled("div", {
  width: "100%",
  height: "100%",
  backgroundPosition: "50% -300px",
  border: "1px solid",
  borderColor: "rgba(228, 202, 255, 0.2)",
  borderRadius: "12px",
  padding: "20px",
  position: "relative",
  flex: "1 1",
  "@sm": {
    padding: "56px",
  },
  "@md": {
    padding: "36px",
  },
  "&:hover": {
    outline: "webkit-focus-ring-color auto 1px",
    borderColor: "rgba(228, 202, 255, 0.5)",
    cursor: "pointer",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0.25,
    zIndex: -1,
  },
  "& .feature-icon": {
    mb: "20px",
  },
  "& .feature-icon img": {
    maxWidth: "100%",
    height: "auto",
  },
  "& .feature-title": {
    fs: "1.25rem",
    letterSpacing: "-.020625rem",
    fontWeight: "700",
    lineHeight: "1.5rem",
    mb: "8px",
  },
  "& .feature-description": {
    display: "block",
    margin: "0px",
    color: "#888888",
    fs: "16px",
    fontWeight: "500",
    lineHeight: "1.5rem",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
  compoundVariants: [],
  defaultVariants: {},
})

type ServiceCardVariants = VariantProps<typeof Component>

type ServiceProps = React.ComponentPropsWithRef<"div"> &
  ServiceCardVariants &
  ServiceCardProps & { css?: CSS; image?: string }

export const ServiceCard = React.forwardRef<HTMLDivElement, ServiceProps>(
  ({ image, css, title, slug, icon, description, ...props }, ref) => {
    const router = useRouter()
    const handleClick = () => {
      router.push(`/${slug}`)
    }
    return (
      <Component
        key={`service-${slug}`}
        onClick={handleClick}
        title={title}
        id={slug}
        aria-label={title}
        {...props}
        ref={ref}
        css={{
          backgroundImage: `url(${image})`,
          ...css,
        }}
      >
        {icon ? (
          <div className="feature-icon">
            <img width="48px" height="48px" src={icon} alt={title} />
          </div>
        ) : null}
        <div className="feature-title">{title}</div>
        <p className="feature-description">{description}</p>
      </Component>
    )
  }
)

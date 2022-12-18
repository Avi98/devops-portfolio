import { styled } from "@/theme/stitches.config"

interface Props {
  children: React.ReactNode
  className?: string
  type?: "design" | "develop" | "Optimize"
  id?: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  style?: React.CSSProperties
}

const StyledHeading = styled("div", {})

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type HeadingProps = Props & NativeAttrs

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  id,
  level,
  style,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <StyledHeading>
      <Tag className={className} id={id} style={style}>
        {children}
      </Tag>
    </StyledHeading>
  )
}

export default Heading

import { FC, PropsWithChildren } from "react"

interface Props {
  className?: string
  children?: React.ReactNode
}

const PageFooter: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

export default PageFooter

import React, { useContext, useMemo } from "react"

import { CSS } from "@/theme/stitches.config"
import cslx from "@/utils/clsx"
import { Justify } from "@/utils/prop-types"
import withDefaults from "@/utils/with-defaults"

import { ModalContext } from "./modal-context"
import { ModalFooterVariantsProps, StyledModalFooter } from "./modal.styles"

interface Props {
  className?: string
  justify?: Justify
  autoMargin?: boolean
  css?: CSS
  as?: keyof JSX.IntrinsicElements
}

const defaultProps = {
  className: "",
  justify: "flex-end" as Justify,
  autoMargin: true,
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>
export type ModalFooterProps = Props &
  typeof defaultProps &
  NativeAttrs &
  ModalFooterVariantsProps

const preClass = "devui-modal-footer"

const ModalFooter: React.FC<React.PropsWithChildren<ModalFooterProps>> = ({
  children,
  className,
  justify,
  autoMargin: autoMarginProp,
  css,
  ...props
}) => {
  const { autoMargin: autoMarginContext, noPadding } = useContext(ModalContext)

  const autoMargin = useMemo(() => {
    return autoMarginContext !== undefined ? autoMarginContext : autoMarginProp
  }, [autoMarginProp, autoMarginContext])

  return (
    <StyledModalFooter
      autoMargin={autoMargin}
      className={cslx(
        preClass,
        {
          [`${preClass}-auto-margin`]: autoMargin,
          [`${preClass}-no-padding`]: noPadding,
        },
        className
      )}
      css={{
        justifyContent: justify,
        ...(css as any),
      }}
      noPadding={noPadding}
      {...props}
    >
      {children}
    </StyledModalFooter>
  )
}

ModalFooter.toString = () => ".devui-modal-footer"

const MemoModalFooter = React.memo(ModalFooter)

export default withDefaults(MemoModalFooter, defaultProps)

import React, { useEffect, useMemo, useState } from "react"

import { createPortal } from "react-dom"

import { __DEV__ } from "@/utils/assertion"
import useBodyScroll from "@/utils/use-body-scroll"
import useCurrentState from "@/utils/use-current-state"
import usePortal from "@/utils/use-portal"

import Backdrop from "../backdrop"
import ModalBody from "./modal-body"
import { ModalConfig, ModalContext } from "./modal-context"
import ModalFooter from "./modal-footer"
import ModalHeader from "./modal-header"
import ModalWrapper from "./modal-wrapper"
import { ModalWrapperProps } from "./modal-wrapper"

interface Props {
  open?: boolean
  scroll?: boolean
  blur?: boolean
  noPadding?: boolean
  closeButton?: boolean
  animated?: boolean
  fullScreen?: boolean
  autoMargin?: boolean
  width?: string
  preventClose?: boolean
  onOpen?: () => void
  onClose?: () => void
  className?: string
}

const defaultProps = {
  width: "400px",
  className: "",
  preventClose: false,
  fullScreen: false,
  closeButton: false,
  animated: true,
  blur: false,
  scroll: false,
  noPadding: false,
}

type NativeAttrs = Omit<React.DialogHTMLAttributes<unknown>, keyof Props>

export type ModalProps = Props &
  NativeAttrs &
  Partial<typeof defaultProps> &
  ModalWrapperProps

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  onClose,
  onOpen,
  open,
  autoMargin,
  width: wrapperWidth,
  className,
  preventClose,
  blur,
  animated,
  fullScreen,
  noPadding,
  ...props
}) => {
  const portal = usePortal("modal")
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true })
  const [visible, setVisible, visibleRef] = useCurrentState<boolean>(false)
  const [rebound, setRebound] = useState(false)

  const closeModal = () => {
    onClose && onClose()
    setVisible(false)
    setBodyHidden(false)
  }

  useEffect(() => {
    if (open === undefined) return
    if (open) {
      onOpen && onOpen()
    }
    if (!open && visibleRef.current) {
      onClose && onClose()
    }
    setVisible(open)
    setBodyHidden(open)
  }, [open])

  const toggleRebound = () => {
    setRebound(true)
    const timer = setTimeout(() => {
      setRebound(false)
      clearTimeout(timer)
    }, 300)
  }

  const closeFromBackdrop = () => {
    if (preventClose) {
      toggleRebound()
      return
    }
    closeModal()
  }

  const modalConfig: ModalConfig = useMemo(
    () => ({
      close: closeModal,
      autoMargin,
      noPadding,
    }),
    []
  )

  if (!portal) return null
  return createPortal(
    <ModalContext.Provider value={modalConfig}>
      <Backdrop
        animated={animated}
        blur={blur}
        fullScreen={fullScreen}
        maxWidth={wrapperWidth}
        visible={visible}
        onClick={closeFromBackdrop}
      >
        <ModalWrapper
          animated={animated}
          className={className}
          fullScreen={fullScreen}
          rebound={rebound}
          visible={visible}
          onCloseButtonClick={closeModal}
          {...props}
        >
          {children}
        </ModalWrapper>
      </Backdrop>
    </ModalContext.Provider>,
    portal
  )
}

type ModalComponent<P = Record<string, unknown>> = React.FC<P> & {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
}

if (__DEV__) {
  Modal.displayName = "DevUI.Modal"
}

Modal.toString = () => ".devui-modal"

Modal.defaultProps = defaultProps

export default Modal as ModalComponent<ModalProps>

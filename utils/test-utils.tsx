import { FC, ReactElement, ReactNode } from "react"

import { render, RenderOptions } from "@testing-library/react"

import MemoCssBaseline from "@/styles/css-baseline"
import { DevOpsInterface } from "@/theme"

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DevOpsInterface>
      <MemoCssBaseline />
      {children}
    </DevOpsInterface>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }

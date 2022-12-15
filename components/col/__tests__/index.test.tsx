import React from "react"

import { render, screen } from "@/utils/test-utils"

import Col from "../index"

describe("Col", () => {
  it("should render column correctly", () => {
    render(<Col>col</Col>)
    expect(screen).toMatchSnapshot()
  })

  it("should render column correctly when nested", () => {
    render(
      <Col>
        <Col>
          <Col />
          col
        </Col>
      </Col>
    )
    expect(screen).toMatchSnapshot()
  })
})

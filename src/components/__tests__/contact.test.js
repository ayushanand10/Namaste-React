import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Page testcases", () => {
  test("Should have rendered the Contact component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
  })

  test("Should have rendered the button with 'submit' inside Contact component", () => {
    render(<Contact />)

    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument()
  })

  test("Should have rendered the button inside Contact component", () => {
    render(<Contact />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
  })

  test("Should load 2 textboxes in Contact component", () => {
    render(<Contact />)

    const textBox = screen.getAllByRole("textbox")

    expect(textBox.length).toBe(2)
  })
})

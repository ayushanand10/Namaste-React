import { render, screen } from "@testing-library/react"
import Card from "../Card"
import ResCardMock from "./mock/ResCardMock.json"
import "@testing-library/jest-dom"

it("should load a Res Card component", () => {
  render(<Card data={ResCardMock} />)

  const name = screen.getByText("La Pino'z Pizza")

  expect(name).toBeInTheDocument()
})

import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("should render Header component with login button", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  // Querry - different ways (better is byRole over byText)

  // const loginBtn = screen.getByRole('button')
  // const loginBtn = screen.getByText('login')
  const loginBtn = screen.getByRole("button", { name: "login" }) // for finding specific button

  // Assert
  expect(loginBtn).toBeInTheDocument()
})

it("should render Header component with cart button", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  // Querry
  // const cartItem = screen.getByText('Cart - (0 items)')
  const cartItem = screen.getByText(/Cart/) // Regex to check whether any thing is having this word

  // Assert
  expect(cartItem).toBeInTheDocument()
})

it("should change login button to logout on click", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  // Querry
  const loginBtn = screen.getByRole('button', {name: 'login'})
  
  fireEvent.click(loginBtn)
  
  const logoutBtn = screen.getByRole('button', {name: 'logout'})


  // Assert
  expect(logoutBtn).toBeInTheDocument()
})

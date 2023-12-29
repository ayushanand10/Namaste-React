import ReactDOM from "react-dom/client"

import About from "./components/About"
import Header from "./components/Header"
import Component from "./components/component"
import Error from "./components/Error"
import Contact from "./components/Contact"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"

import React, { Suspense, lazy, useEffect, useState } from "react"
import UserContext from "./utils/UserContext"

import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

const Grocery = lazy(() => import("./components/Grocery"))

const Body = () => {
  const [userName, setUserName] = useState()

  // Authentication
  useEffect(() => {
    // Make API call and receive user data

    // suppose this data came from the backend
    const data = {
      name: "Ayush Anand",
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='body'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Component />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)

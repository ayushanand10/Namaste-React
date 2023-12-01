import ReactDOM from "react-dom/client"

import About from "./components/About"
import Header from "./components/Header"
import Component from "./components/component"
import Error from "./components/Error"
import Contact from "./components/Contact"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"

import React, { Suspense, lazy } from "react"

// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import("./components/Grocery"))

const Body = () => {
  return (
    <div className='body'>
      <Header />
      <Outlet />
    </div>
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

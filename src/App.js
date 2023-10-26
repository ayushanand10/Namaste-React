import React from "react"
import ReactDOM from "react-dom/client"

import Header from './components/Header'
import Component from "./components/component"

const Body = () => {
  return (
    <div className='body'>
      <Header />
      <Component />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Body />)

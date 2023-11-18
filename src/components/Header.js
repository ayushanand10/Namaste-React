import { useState } from "react"

import { Link } from "react-router-dom"

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login")

  return (
    <div className='navbar'>
      <div className="logo">LOGO</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>
          <button
            className='loginBtn'
            onClick={() => {
              loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")
            }}
          >
            {loginBtn}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Header

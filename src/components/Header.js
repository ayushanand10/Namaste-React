import { useState } from "react"

import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login")

  const onlineStatus = useOnlineStatus()

  return (
    <div className='navbar'>
      <div className='logo'>LOGO</div>
      <ul>
        <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='/grocery'>Grocery</Link>
        </li>
        <li>
          <button
            className='loginBtn'
            onClick={() => {
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login")
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

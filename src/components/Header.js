import { useState, useContext } from "react"

import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login")

  const onlineStatus = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext)

  console.log(loggedInUser);

  return (
    <div className='p-4 flex justify-between bg-indigo-300'>
      <div className='px-4'>LOGO</div>
      <ul className="flex">
        <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
        <li className="px-4">
          <Link to='/'>Home</Link>
        </li>
        <li className="px-4">
          <Link to='/about'>About Us</Link>
        </li>
        <li className="px-4">
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li className="px-4">
          <Link to='/grocery'>Grocery</Link>
        </li>
        <li className="px-4">
          <button
            className='px-4 bg-green-200 rounded-md'
            onClick={() => {
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login")
            }}
          >
            {loginBtn}
          </button>
        </li>
        <li className="px-4 font-semibold">
          {loggedInUser}
        </li>
      </ul>
    </div>
  )
}

export default Header
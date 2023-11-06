import { useState } from "react"

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login")

  return (
    <div className='navbar'>
      <button
        className='loginBtn'
        onClick={() => {
          loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")
        }}
      >
        {loginBtn}
      </button>
    </div>
  )
}

export default Header

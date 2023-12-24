import { useEffect, useState } from "react"
import UserContext from "../utils/UserContext"

function User(props) {
  const { name, location } = props

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("useEffect time out")
    }, 1000)

    return () => {
      clearInterval(timer)
      // console.log("Timer stopped")
    }
  }, [])

  return (
    <div className='userCard'>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>contact: ayushanand1010@gmail.com</h4>
      <div className=''>
        <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    </div>
  )
}

export default User

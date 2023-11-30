import { useEffect, useState } from "react"

const User = (props) => {
  const { name, location } = props

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("useEffect time out")
    }, 1000)

    return () => {
      clearInterval(timer)
      console.log("Timer stopped")
    }
  }, [])

  return (
    <div className='userCard'>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>contact: ayushanand1010@gmail.com</h4>
    </div>
  )
}

export default User

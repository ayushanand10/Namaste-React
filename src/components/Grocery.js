import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext)

  return (
    <>
      <h1 className="text-2xl">
        This is Grocery Delivery Page <br />
        It contains many components...
      </h1>
      <br />
      <h4 className="text-lg font-medium">{loggedInUser}</h4>
    </>
  )
}

export default Grocery

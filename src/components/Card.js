import { useContext } from "react"
import { IMG_SRC } from "../utils/constants"
import UserContext from "../utils/UserContext"


const Card = (props) => {
  const { data } = props

  const userInfo = useContext(UserContext)

  return (
    <div className='bg-slate-200 m-4 px-4 py-2 rounded-md hover:bg-slate-300 w-52'>
      <img
        className='w-44 h-40 rounded-md'
        src={IMG_SRC + data?.info?.cloudinaryImageId}
        alt=''
      />
      <h2 className='font-bold text-lg'>{data?.info?.name}</h2>
      <h4 className='text-sm'>Rating : {data?.info?.avgRating}</h4>
      <h4 className='text-sm'>User : {userInfo?.loggedInUser}</h4>
    </div>
  )
}

// Higher Order Component which will receives Card component, enhances it by adding the discount and returning the card with discount lable
// input -> Card  ===>> output -> CardWithDiscount

export const withDiscountLable = (Card) => {
  return (props) => {
    return (
      <div>
        <label
          className='absolute bg-indigo-300 p-2 mt-2 ml-2 drop-shadow-xl rounded-md'
        >
          Discount
        </label>
        <Card {...props} />
      </div>
    )
  }
}

export default Card
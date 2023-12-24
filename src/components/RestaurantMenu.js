import ShimmerUi from "./ShimmerUi"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(0)

  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <ShimmerUi />

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

  return (
    <div className='mx-12 my-8 text-center'>
      <h1 className='font-bold text-3xl'>{name}</h1>
      <p className='text-lg mb-4'>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h2 className='text-xl font-bold'>Menu</h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card.card}
          showItems={index === showItems}
          setShowItems={() => {
            showItems === index ? setShowItems(null) : setShowItems(index)
          }}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu

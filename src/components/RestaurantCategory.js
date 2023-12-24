import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({ data, showItems, setShowItems }) => {

  const handleShowItems = () => {
    setShowItems();
  }

  return (
    <div className='w-8/12 bg-indigo-100 m-auto my-2 rounded-md'>
      {/* accordian title */}
      <div
        className='p-4 flex justify-between cursor-pointer'
        onClick={handleShowItems}
      >
        <span className='font-bold'>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ?  "▲" : "▼"}</span>
      </div>

      {/* accordian list */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  )
}

export default RestaurantCategory

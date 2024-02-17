import { IMG_SRC } from "../utils/constants"
import {addItem} from '../utils/cartSlice'
import { useDispatch } from "react-redux"

const ItemList = ({ items }) => {
  
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
      dispatch(addItem(item))
  }

  return (
    <div className='flex flex-col gap-2'>
      {items.map((item) => (
        <div className='text-left px-8 py-2 h-max flex justify-between border-gray-300 border-b-2'>
          <div className='w-10/12'>
            <div className='font-semibold'>{item.card.info.name}</div>
            <div className='text-sm'>₹{item.card.info.price / 100}</div>
            <div className='text-sm font-extralight'>
              {item.card.info.description && item.card.info.description}
            </div>
          </div>
          <div className='w-2/12'>
            <button
              className='px-4 bg-black text-white text-sm absolute rounded-lg'
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
            <img
              className='w-full'
              src={IMG_SRC + item.card.info.imageId}
              alt=''
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList

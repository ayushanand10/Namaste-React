import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='m-4 flex flex-col items-center gap-4'>
      <h1 className=' font-bold text-2xl'>Cart</h1>

      <div className='w-8/12'>
        <ItemList items={cartItems} />
      </div>
      <div className=''>
        <button
          className='bg-slate-700 text-blue-200 p-2 rounded-lg'
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default Cart

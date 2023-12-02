import { IMG_SRC } from "../utils/constants"

const Card = (props) => {
  const { data } = props

  return (
    <div className='bg-slate-200 m-4 px-4 py-2 rounded-md hover:bg-slate-300'>
      <img className="w-44 h-40 rounded-md" src={IMG_SRC + data.info.cloudinaryImageId} alt="" />
      <h2 className='font-bold text-lg'>{data.info.name}</h2>

      <h4 className='text-sm'>Rating : {data.info.avgRating}</h4>
      
    </div>
  )
}

export default Card

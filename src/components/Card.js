import { IMG_SRC } from "../utils/constants"

const Card = (props) => {
  const { data } = props

  return (
    <div className='cardContainer'>
      <img className="cardImg" src={IMG_SRC + data.info.cloudinaryImageId} alt="" />
      <h2 className='cardName'>{data.info.name}</h2>

      <h4 className='cardDetail'>Rating : {data.info.avgRating}</h4>
      
    </div>
  )
}

export default Card

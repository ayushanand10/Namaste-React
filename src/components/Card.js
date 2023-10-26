const Card = (props) => {
  const { data } = props

  return (
    <div className='cardContainer'>
      <h2 className='cardName'>{data.name}</h2>

      <h4 className='cardAge'>{data.age}</h4>
    </div>
  )
}

export default Card

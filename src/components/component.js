import React, { useContext } from "react"
import Card, { withDiscountLable } from "./Card"
import ShimmerUi from "./ShimmerUi"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const Component = () => {
  const [record, setRecord] = useState([])
  const [filteredRecord, setFilteredRecord] = useState([])

  const CardWithDiscount = withDiscountLable(Card)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const json = await data.json()

    const API_CONST =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    console.log(API_CONST)

    setRecord(API_CONST)
    setFilteredRecord(API_CONST)
  }

  const [searchText, setSearchText] = useState("")

  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>
  }

  const { loggedInUser, setUserName } = useContext(UserContext)

  return !record || record.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className='containerWrapper'>
      <div className='flex gap-8 m-4 p-4'>
        <div className='flex gap-4'>
          <input
            className='border border-black rounded-lg px-2'
            type='text'
            name=''
            id=''
            placeholder='Search'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />

          <button
            className='px-2 bg-gray-300 rounded-lg'
            onClick={() => {
              const filteredRecord = record.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              })
              setFilteredRecord(filteredRecord)
            }}
          >
            Search
          </button>
        </div>
        <button
          className='px-2 bg-green-300 rounded-lg'
          onClick={() => {
            // Filter logic (age < 18)
            const filteredList = record.filter(
              (res) => res.info.avgRating > 4.5
            )
            setFilteredRecord(filteredList)
          }}
        >
          Highest Rated ({">"} 4.5)
        </button>
        User Name:
        <input
          type='text'
          value={loggedInUser}
          className='border border-black rounded-lg px-2 py-1'
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
      </div>

      <div className='flex flex-wrap p-2 m-2'>
        {filteredRecord.map((res) => (
          <Link
            to={"/restaurant/" + res.info.id}
            key={res.info.id}
          >
            {/* If restaurant offers any discount then show the discount on the card */}
            {res.info.aggregatedDiscountInfoV2 != null ? (
              <Card data={res} />
            ) : (
              <CardWithDiscount data={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Component

import React from "react"
import Card from "./Card"
import ShimmerUi from "./ShimmerUi"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Component = () => {
  // State variable - super powerful variable
  const [record, setRecord] = useState([])
  const [filteredRecord, setFilteredRecord] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const json = await data.json()

    const API_CONST =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    setRecord(API_CONST)
    setFilteredRecord(API_CONST)
  }

  const [searchText, setSearchText] = useState("")

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline</h1>
    )
  }

  return record.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className='containerWrapper'>
      <div className='filter'>
        <div className='search'>
          <input
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
            className='actionBtn'
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
          className='actionBtn'
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
      </div>

      <div className='container'>
        {filteredRecord.map((res) => (
          <Link
            to={"/restaurant/" + res.info.id}
            key={res.info.id}
          >
            <Card data={res} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Component

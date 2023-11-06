import React from "react"
import Card from "./Card"
import ShimmerUi from "./ShimmerUi"
import { useState, useEffect } from "react"

const Component = () => {
  // State variable - super powerful variable
  const [record, setRecord] = useState([])
  const [filteredRecord, setFilteredRecord] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/data")

    const json = await data.json()

    setRecord(json)
    setFilteredRecord(json)
  }

  const [searchText, setSearchText] = useState('')

  console.log('body rendered');

  return record.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className='containerWrapper'>
      <div className="filter">
        <div className="search">

          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="loginBtn"
            onClick={() => {
              const filteredRecord = record.filter((res) => {
                return res.name.toLowerCase().includes(searchText.toLowerCase())
              })
              setFilteredRecord(filteredRecord);
            }}
          >
            Search
          </button>

        </div>

        <button
          className='loginBtn'
          onClick={() => {
            // Filter logic (age < 18)
            const filteredList = record.filter((res) => res.age < 18)
            setFilteredRecord(filteredList)
          }}
        >
          Minor
        </button>
      </div>

      <div className='container'>
        {filteredRecord.map((student) => (
          <Card
            key={student.id}
            data={student}
          />
        ))}
      </div>
    </div>
  )
}

export default Component

// import React from "react"
import Card from "./Card"
import { data } from "../data"
import { useState } from "react"

const Component = () => {
  // State variable - super powerful variable
  const [record, setRecord] = useState(data)

  return (
    <div className='containerWrapper'>
      <button
        className='filterBtn'
        onClick={() => {
          // Filter logic (age < 18)
          
          const filteredList = record.filter((res) => res.age < 18)

          setRecord(filteredList)
        }}
      >
        Minor
      </button>

      <div className='container'>
        {record.map((student) => (
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

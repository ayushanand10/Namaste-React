import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

const Card = (props) => {
  const { data } = props;

  return (
    <div className='cardContainer'>
      <h2 className='cardName'>{data.name}</h2>

      <h4 className='cardAge'>{data.age}</h4>
    </div>
  );
};

const data = [
  {
    id:'1',
    name: "Ayush",
    age: "23",
  },
  {
    id:'2',
    name: "Anand",
    age: "20",
  },
  {
    id:'3',
    name: "Nilabh",
    age: "13",
  },
  {
    id:'4',
    name: "Mishra",
    age: "2",
  },
  {
    id:'5',
    name: "kartik",
    age: "17",
  },
  {
    id:'6',
    name: "Srivastava",
    age: "15",
  },
  {
    id:'7',
    name: "Praja",
    age: "33",
  },
  {
    id:'8',
    name: "Kunal",
    age: "24",
  },
  {
    id:'9',
    name: "Avadhesh",
    age: "18",
  },
  {
    id:'10',
    name: "Shashank",
    age: "23",
  },
];

const Component = () => {
  return (
    <div className='container'>
      {
        data.map((student) => (
          <Card key={student.id} data={student} />
        ))
      }
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);

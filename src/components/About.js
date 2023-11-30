import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component {
  constructor(props) {
    super(props)

    // console.log("Parent Constructor")
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount")
  }

  render() {
    // console.log("Parent Render")

    return (
      <div className='aboutContainer'>
        <h1>About Us</h1>
        <h3>This is about us page</h3>
        <User name='First' location='Deoghar' />
        {/* <UserClass name='First' location='Deoghar' /> */}
        {/* <UserClass name='Second' location='Deoghar' /> */}
      </div>
    )
  }
}

export default About

{
  /* <UserClass
  name='Third'
  location='Deoghar'
/> */
}
// const About = () => {
//     return (
//         <div className="aboutContainer">
//             <h1>About Us</h1>
//             <h3>This is about us page</h3>

//             {/* <User name="Ayush Anand (functional)" location="Deoghar (function)"/> */}
//             <UserClass name="Ayush Anand (class)" location="Deoghar (class)"/>

//         </div>
//     )
// }

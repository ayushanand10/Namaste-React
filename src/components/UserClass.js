import React from "react"
import DummyClass from "./DummyClass"

class UserClass extends React.Component {
  constructor(props) {
    // console.log("Constructor Called");

    super(props)

    this.state = {
      userInfo: {
        name: "User Name",
        location: "Default Location",
      },
    }
  }

  async componentDidMount() {
    // console.log("Component Did Mount");

    const data = await fetch(" https://api.github.com/users/ayushanand10")
    const json = await data.json()

    this.setState({
      userInfo: json,
    })
  }
  
  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }
  
  render() {
    // console.log("Component Rendered");

    const { name, location } = this.state.userInfo;

    return (
      <div className='userCard'>
        <h2>Name: {name}</h2>
        <h3>Location: {location === null ? "Work from home": location}</h3>
      </div>
    )
  }
}

export default UserClass

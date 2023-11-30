import React from "react";

class DummyClass extends React.Component{
    constructor(props) {
        super(props);

        console.log(this.props.name + "Child Constructor");
    }
    
    componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount");
    }

    render() {
        console.log(this.props.name + "Child Render");

        return (
            <div className="userCard">
                grandChild
            </div>
        )
    }
}

export default DummyClass;
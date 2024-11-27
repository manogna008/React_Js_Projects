import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <>
        <h1>About Us</h1>
        <h2>This is Biggy series</h2>
        <UserClass name={"Manogna Bade"} location={"Vizag"} />
      </>
    );
  }
}

export default About;

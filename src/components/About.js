import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h3>{loggedInUser}</h3>}
          </UserContext.Consumer>
        </div>
        <h2>This is Biggy series</h2>
        <UserClass name={"Manogna Bade"} location={"Vizag"} />
      </>
    );
  }
}

export default About;

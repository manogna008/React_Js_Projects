import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        login: "dummycontact",
        avatar_url: "dummyurl",
      },
    };
    // console.log("Child constructor");
  }
  async componentDidMount() {
    //  console.log("Child componentDidMount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    // console.log("Child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2 className="name">Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;

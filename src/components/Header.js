import { useContext, useEffect, useState } from "react";
import { Logo_Img } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  //if no dependency array => useEffect is called on every render
  // if dependency array is empty [] => useEffect is called at initial render. only once
  // if dependency array is there like [buttonName] => called every time buttonName changes(updated)
  //useEffect(() => {
  // console.log("header useEffect");
  //}, []);

  const getStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_Img} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {getStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

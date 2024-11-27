import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Rest_API } from "../utils/constants";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRest, setFilterRest] = useState([]);
  //whenever state vairable update, react triggers a reconciliation cycle(re-render the component)

  //2nd way communication
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Rest_API);
    const json = await data.json();
    //optional chaining
    const swiggyList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRest(swiggyList);
    setFilterRest(swiggyList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are offline, please check your internet connection</h1>;

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search_bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredRestaurant = listOfRest.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRest(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter_btn"
          onClick={() => {
            const filterlogic = listOfRest.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilterRest(filterlogic);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest_container">
        {filterRest.map((rest) => (
          <Link to={"/resturants/" + rest.info.id} key={rest.info.id}>
            <RestroCard resData={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

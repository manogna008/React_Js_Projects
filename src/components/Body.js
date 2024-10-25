import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    const swiggyList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRest(swiggyList);
    setFilterRest(swiggyList);
  };

  //Conditional rendering
  // if (listOfRest.length === 0) {
  //   return <Shimmer />;
  // }

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

import RestroCard from "./RestroCard";
import listOfRestaurant from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRest, setListOfRest] = useState(listOfRestaurant);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filterlogic = listOfRest.filter((res) => {
              return res.data.avgRating > 4;
            });
            setListOfRest(filterlogic);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="rest_container">
        {listOfRest.map((rest) => (
          <RestroCard key={rest.data.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;

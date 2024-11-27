import { useEffect, useState } from "react";
import { Rest_API } from "./constants";
const useListOfRest = () => {
  const [listOfRest, setListOfRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Rest_API);
    const json = await data.json();
    const swiggyList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRest(swiggyList);
  };
  return listOfRest;
};

export default useListOfRest;

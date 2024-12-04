import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";
const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [showItem, setShowItem] = useState(false);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemmap = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = itemmap.filter((item) => {
    if (
      item.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      return item;
    }
  });
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <div>
        {categories.map((c, index) => (
          //controlled component
          <ResturantCategory
            key={c.card.card.title}
            data={c?.card?.card}
            showItem={index === showIndex && showItem}
            setShowIndex={() => {
              setShowItem(!showItem);
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default ResturantMenu;

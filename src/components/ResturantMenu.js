import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemmap = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const Recommended = itemmap.filter((item) => {
    if (
      item.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      return item;
    }
  });
  console.log(Recommended, "recomd");
  const { itemCards } = Recommended[0].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResturantMenu;

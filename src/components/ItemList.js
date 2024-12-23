import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="container">
      {itemCards.map((item) => (
        <div key={item.card.info.id} className="border-bottom border-dark row">
          <div className="col-10">
            <div className="p-1">
              <span>{item.card.info.name}</span>
              <span className="ms-2">- ₹{item.card.info.price / 100}</span>
            </div>
            <p className="p-1 fs-6 fw-lighter">{item.card.info.description}</p>
          </div>
          <div className="col-2">
            {" "}
            <img src={CDN_URL + item.card.info.imageId} className="menu_img" />
            <button className="btn-blue" onClick={() => handleAddItem(item)}>
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

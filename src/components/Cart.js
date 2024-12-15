import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="text-center p-10 m-10">
      <div className="text-2xl font-bold">Cart</div>

      <div>
        <button className="btn-primary" onClick={handleClear}>
          Clear Cart
        </button>
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
};
export default Cart;

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    // don't do this
    // const store = useSelector((store) => store);
    // const cartItems = store.items;


    console.log(cartItems);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        // dispatch an action
        dispatch(clearCart());
    };

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="m-2 p-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                    <h1>Cart is empty, add items to the cart...</h1>
                )}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
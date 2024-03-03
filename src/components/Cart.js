import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../utils/cartSlice";

import ItemList from "../ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleclearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cartItem-container">
            <h2>Cart</h2>

            <div className="text">
                {cartItems.length === 0 && (
                    <h1>Cart is Empty Now.. Please Add Item Into Cart</h1>
                )}
            </div>
            <div className=" button-container">
                <button className="clr-btn" onClick={handleclearCart}>
                    Clear
                </button>
            </div>

            <div className="cartItem-container">
                <div className="cartItem">
                    <ItemList items={cartItems} />
                </div>
            </div>
        </div>
    );
};

export default Cart;

import React, {useContext} from "react";
import "@styles/shopping_cart.css";
import appContext from "@context/appContext";
import OrderItem from "@components/order_item";


const ShoppingCart = () => {
    const {state} = useContext(appContext);
    const sumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };
    return (
        <aside className="product-detail">
                <div className="title-container">
                    <img src="../assets/symbols/flecha_left.svg" alt="arrow" />
                    <p className ="title">My order</p>
                </div>
                <div className="my-order-content">
                    <div className="order">
                            {state.cart.map((product) => {
                                <OrderItem product={product} key={`orderItem-${product.id}`} />
                            })}
                        <p>
                            <span>Total</span>
                        </p>
                        <p>${sumTotal}</p>
                    </div>

                    <button className="primary-button">
                        Checkout
                    </button>
                </div>
        </aside >
    )
}

export default ShoppingCart;
import React, { useContext} from "react";
import "@styles/allProducts.css";
const Cart = "@assets/symbols/bt_add_to_cart.svg";
import appContext from "@context/appContext";


const AllProducts = ({product}) => {
    const {addToCart} = useContext(appContext);

    const handleClick = (product) => {
        addToCart(product);
    };
    
    return (
                <div className="ProductItem">
                    <img src={product.images[0]} alt={product.title} />
                    <div className="product-info">
                        <div>
                            <h3>${product.price}</h3>
                            <p >{product.title}</p>
                        </div>
                        <figure onClick={() => handleClick(product)}>
                            <img src={Cart} alt="add to cart" />
                        </figure>
                    </div>
                </div>
    )
};

export default AllProducts;



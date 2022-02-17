import React, {useContext} from 'react';
import '@styles/order_item.css';
const iconClose =  '@assets/symbols/icon_close.svg';
import appContext from "@context/appContext";


const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(appContext);

    const handleRemove = (product) => {
        removeFromCart(product);
    }

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} alt="close" onClick={handleRemove(product)} />
		</div>
	);
}

export default OrderItem;






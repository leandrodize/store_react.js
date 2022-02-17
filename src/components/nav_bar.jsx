import React, {useState, useContext} from "react";
import "@styles/nav_bar.css";
const menu = "@assets/symbols/icon_menu.svg";
const logo = "@assets/symbols/logo_yard_sale.svg";
const cart = "@assets/symbols/icon_shopping_cart.svg";
import Menu from "./menu";
import ShoppingCart from "@containers/shopping_cart";
import appContext from "@context/appContext";



const NavBar = () => {
    const {state} = useContext(appContext);
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    const [shopping, setShopping] = useState(false);
    const handleShopping = () => {
        setShopping(!shopping);
    };

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left" >
                <img src={logo} alt="logo" className="logo" />
    
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
    
            <div className="navbar-right">
                <ul>
                    <li onClick={handleMenu} className="navbar-email"><a href="###/cdn-cgi/l/email-protection" data-cfemail="15657974616f7c55706d74786579703b767a78">[email&#160;protected]</a></li>
                    <li className="navbar-shopping-cart" onClick={handleShopping}>
                        <img  src={cart} alt="shopping cart"/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div>: null }
                     </li>
                </ul>
            </div>
            {menu && <Menu/>}
            {shopping && <ShoppingCart/>}
        </nav>
    );
}

export default NavBar;

import React ,{useState, useEffect} from "react";
import NavBar from "@components/nav_bar";
import AllProducts from "@components/product_item";
import useGETproducts from "../hooks/useGETproducts";
import "@styles/productsPage.css";


const API = "https://api.escuelajs.co/api/v1/products";


const Products = () => {
    const hookProducts = useGETproducts(API);
    return (
        <section>
            <div>
                <NavBar />
            </div>
            <div className="ProductList">
                    {hookProducts.map((product) => (
                        <AllProducts product={product} key={product.id} />
                    ))}   
            </div>
        </section>
    );
};

export default Products;





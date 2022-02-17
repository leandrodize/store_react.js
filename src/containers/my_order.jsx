import React from 'react'
import "@styles/my_order.css";


const MyOrder = () => {
    return (
        <section className="my_order">
            <div className="my_order_container">
                <h1>My order</h1>
                <div className="my_order_content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span id="articles">6 articles</span>
                        </p>
                        <p id="price">$ 1.150.00</p>
                    </div>
                    <div className="shopping_cart">
                        <figure>
                            <img src="/assets/products/H0c9b9225175845338725289dd3315308f.jpg" alt="case carbon fiber" />
                        </figure>
                        <p>Case Carbon Fiber</p>
                        <h3>$ 450.00</h3>
                    </div>
                    <div className="shopping_cart">
                        <figure>
                            <img src="/assets/products/audir8 polo solo.png" alt="polo audi r8" />
                        </figure>
                        <p>T-shirt Audi R8</p>
                        <h3>$ 25.00</h3>
                    </div>
                    <div className="shopping_cart">
                        <figure>
                            <img src="/assets/products/H1a729b06db6f47d797aa475bd8fa5d05D.jpg" alt="Wallet" />
                        </figure>
                        <p>Fiber Wallet</p>
                        <h3>$ 250.00</h3>
                    </div>
                    <div className="shopping_cart">
                        <figure>
                            <img src="/assets/products/Ha6cead3ca85a4e5ea782d087aee1b6a3O.jpg" alt="smart watch" />
                        </figure>
                        <p>Smart watch</p>
                        <h3>$ 350.00</h3>
                    </div>
                    <div className="shopping_cart">
                        <figure>
                            <img src="/assets/products/PicsArt_04-29-04.06_mockup_Back_Flat_Black.png" alt="polo audi r8" />
                        </figure>
                        <p>T-shirt Audi R8</p>
                        <h3>$ 25.00</h3>
                    </div>
                    <div className="shopping_cart">
                        <figure>
                            <img src="/assets/products/merchnew86_mockup_Back_Wrinkled_White.png" alt="tshirt white drift" />
                        </figure>
                        <p>T-shirt White Drift</p>
                        <h3>$ 50.00</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyOrder;

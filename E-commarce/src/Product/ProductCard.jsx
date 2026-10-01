import "../Product/ProductCard.css";
import Addcart from "../LocalStorage/Addcart";

import { useState } from "react";
function ProductCard({ product }) {
    
    
    

    return (
        <div className="product-card">

            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">

                <h2>{product.name}</h2>

                <p className="category">
                    {product.category}
                </p>

                <p className="description">
                    {product.description}
                </p>

                <div className="bottom">
                    <h3>₹{product.price}</h3>

                    <div className="buttons">
                        <button className="buy-btn">
                            Buy Now
                        </button>

                        <button className="cart-btn" onClick={() => {
                            Addcart(product.id)
                            
                            
                        }}>
                            Add Cart
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProductCard;
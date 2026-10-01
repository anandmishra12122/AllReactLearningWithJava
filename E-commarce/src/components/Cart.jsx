import "../components/Cart.css";
function Cart() {
    return (
        <div className="cart-container">

            <h2 className="cart-title">Your Cart</h2>

            <div className="cart-item">

                <div className="cart-image">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Wireless Headphones"
                    />
                </div>

                <div className="cart-info">

                    <h2>Wireless Headphones</h2>

                    <p className="category">
                        Electronics
                    </p>

                    <div className="cart-bottom">

                        <h3>₹1999</h3>

                        <button className="remove-btn">
                            Remove
                        </button>

                    </div>

                </div>

            </div>


            <div className="cart-item">

                <div className="cart-image">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Running Shoes"
                    />
                </div>

                <div className="cart-info">

                    <h2>Running Shoes</h2>

                    <p className="category">
                        Footwear
                    </p>

                    <div className="cart-bottom">

                        <h3>₹2499</h3>

                        <button className="remove-btn">
                            Remove
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Cart;
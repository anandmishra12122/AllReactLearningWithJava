import "../components/Header.css";
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <div className="container">
            <h2 className="shopname">ShopCart</h2>

            <nav className="alllink">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/all">All Products</NavLink>
                <NavLink to="/men">Men</NavLink>
                <NavLink to="/women">Women</NavLink>
                <NavLink to="/cart">
                    <div class="cart">
                        🛒
                        <span class="cart-count" id="cartCount">0</span>
                    </div>
                </NavLink>
            </nav>

            <div className="searchcontainer">
                <input type="text" placeholder="🔍Search products..." />
                <button>Search</button>
            </div>

        </div>
    );
}

export default Header;
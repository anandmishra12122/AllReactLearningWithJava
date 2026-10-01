import "../components/Footer.css";
function Footer() {
    return (
        <footer className="footer">

            <div className="footer-section">
                <h2>ShopCart</h2>
                <p>Your one stop shop for quality products.</p>
            </div>

            <div className="footer-section">
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>All Products</p>
                <p>Cart</p>
                <p>Contact</p>
            </div>

            <div className="footer-section">
                <h3>Customer Support</h3>
                <p>Help Center</p>
                <p>Returns</p>
                <p>Privacy Policy</p>
            </div>

            <div className="footer-section">
                <h3>Follow Us</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>

            <div className="copyright">
                © 2026 ShopCart. All Rights Reserved.
            </div>

        </footer>
    );
}

export default Footer;
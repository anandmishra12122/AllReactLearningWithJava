import { useLoaderData } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import Product from "../Product/ProductData";
import "../components/Home.css";
function Home() {
    const products = Product;


    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))
            }
        </div>
    );
}

export default Home;
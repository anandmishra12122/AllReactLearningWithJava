import ProductCard from "../Product/ProductCard";
import products from "../Product/ProductData";
import "../components/Allproduct.css";
function Allproduct()
{
    const Product = products;
    
    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default Allproduct;
import "../components/Allproduct.css";
import products from "../Product/ProductData";
import ProductCard from "../Product/ProductCard";
function Women()
{
    const product = products;
    return (
        <div className="product-grid">
            {
                product
                    .filter((data) => data.category === "Women")
                    .map((data) => (
                        <ProductCard
                            key={data.id}
                            product={data}
                        />
                    ))
            }
        </div>
    );
}

export default Women;
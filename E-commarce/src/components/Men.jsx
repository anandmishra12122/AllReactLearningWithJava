import ProductCard from "../Product/ProductCard";
import products from "../Product/ProductData";
function Men() {
    const product = products;

    return (
        <div className="product-grid">
            {
                product
                    .filter((data) => data.category === "Men")
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

export default Men;
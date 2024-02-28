import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

const ProductsList = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=9');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.products)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    useEffect(() => {
        getProducts();
    },[])

  return (
    <div className="products-list">
        {!!products.length && products.map(product => <ProductCard key={product.id} data={product} />)}
    </div>
  )
}

export default ProductsList
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import PropTypes from 'prop-types';

const ProductRow = ({category}) => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=3`);
            const data = response.data;
            setProducts(data.products)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    useEffect(() => {
        getProducts()
    },[])

  return (
    <div className="container productRow">
        {!!products.length && products.map(product => <ProductCard key={product.id} data={product} />)}
    </div>
  )
}

export default ProductRow

ProductRow.propTypes = {
    category: PropTypes.string.isRequired
}
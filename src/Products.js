import React from 'react'
import { useParams } from 'react-router-dom';
import allProducts from './server/data.json'
import Card from './Card';

function Products() {
    const { product } = useParams()

    const products = allProducts.filter(prod => {
        if (prod.category === product) {
            return prod
                  }
    })

    return (
      <div className="Products">
     <h1>{`Product: ${product}`}</h1>
{products.map(  prod => 
    <Card product={prod} />)}
     
      </div>
    );
  }
  
  export default Products;
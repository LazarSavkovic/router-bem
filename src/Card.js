import React from 'react'

function Card({product}) {
    return (
      <div className="Card">
     <h3 className='Card__title'>{product.name}</h3>
     <p className='Card__category'>{product.category}</p>
     <h3 className='Card__price'>{product.price}</h3>
     
      </div>
    );
  }
  
  export default Card;
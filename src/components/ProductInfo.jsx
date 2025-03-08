import React from 'react'

const ProductInfo = () => {


  return(

        <Product 
    
           name='laptop'
           price= {1000}
           status= 'product is available'
           />
        )

};

const Product = ({name, price, status}) => {
  return (
    <div>
        <h3>Alvin Shop</h3>
        <h5>Item: {name}</h5>
        <h5>Price: KES {price}</h5>
        <h5>Status: {status}</h5>
        
        </div>
  )
}


export default ProductInfo
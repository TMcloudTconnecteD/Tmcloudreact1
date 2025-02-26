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

const Product = (props) => {
  return (
    <div>
        <h3>Alvin Shop</h3>
        <h5>Item: {props.name}</h5>
        <h5>Price: KES {props.price}</h5>
        <h5>Status: {props.status}</h5>
        
        </div>
  )
}


export default ProductInfo
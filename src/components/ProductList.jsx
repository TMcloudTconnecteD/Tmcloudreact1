import React from 'react'

const ProductList = () => {

const products = [
    { id: 1, name: 'phone', price:'15000'},
    { id: 2, name: 'homebank', price:'5000'},
    { id: 3, name: 'laptop', price:'70000'},


] 



  return (
    <div>
        {products.map((p) => (
        <div key={p.id}>
        <h5>Name: {p.name}</h5>
        <h5>Price: kes{p.price}</h5>
    </div>
))}

    </div>
  )
}

export default ProductList
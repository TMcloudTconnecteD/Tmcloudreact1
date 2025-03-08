import React from 'react'

const   Cart = () => {
const items = ['Home-bank', 'Iphone17', 'New ssd', 'Hoodie'];


  return (
    <div> <h3>Cart</h3>
    {items.length > 0 && <h5>
        You have {items.length} items in your Cart</h5>}
    
<ul>
  <h4>Products Listed Today</h4>
  {items.map((item) => (
    <li
      key = {Math.random()} > { item }
    </li>
  ))}
</ul>


    </div>
  )
}

export default   Cart
import React from 'react'

const Numbers = () => {

const numbers = [1, 2, 3, 4, 5, 28]

  return (


    <div>
            {numbers.map((Number) => (
             <ul key={Number}>
                <li>{Number}</li>
            </ul>
            ))}
    



    </div>
  )
}

export default Numbers
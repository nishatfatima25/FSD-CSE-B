import React from 'react'
import './Book.css'
import { useState } from 'react'

const Book = ({book}) => {

  //const [count,setCount] = useState(1)
  
//   function increment(){
//     setCount(count+1)
//   }

//   function decrement(){
//     setCount(count-1)
//     console.log()
//   }

  return (
    <div className='card'>
      <img src={book.image} alt="" width={200} height={200} />
      <h3>{book.title}</h3>
      <h4>{book.price}</h4>

      
        {/* <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button> */}
      

      <button>Add to Cart</button>
    </div>
  )
}

export default Book

import React from 'react'
import Book from './components/Book'
import './App.css'
import Header from './components/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from './components/Footer'

const App = () => {

  const [book,setBooks] = useState([]);
  // const books=[
  //   {image:"",title:"Phy",price:500},
  //   {image:"",title:"maths",price:500},
  //   {image:"",title:"chem",price:500},
  // ]

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setBooks(data);

    })
  },[])
  return (

    <>
      <Header/>
      <div className='booklist'>
       {
        book.map((b,i)=>{
           return  <div key={i} className='card'>
      <img src={b.image} alt="" width={200} height={200} />
      <h3>{b.title}</h3>
      <h4>{b.price}</h4>
      <button>Add to Cart</button>
    </div>
        })
       }
    </div>
      <Footer/>
     
    </>
    
  )
}

export default App

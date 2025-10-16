// import'style.css'
// import ReactDOM from 'react-dom/client'
// function Book({book}){
//     return (
//         <div className="card">
//             <img src={book.img} height="200" width="200" alt="book-img"></img>
            
//             <h3>Title:{book.title}</h3>
//             <h4>Price: Rs.{book.price}</h4>
//             <button>Add to Cart</button>

//         </div>
//     )
// }


// function App(){

//     return(
//         <div>
//             {books.map((b,i)=>(
//                 <Book key={i} book={b}>
//                 </Book>
//             ))
//             }
//         </div>
//     )
// }

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// root.render(<App />)


import React from "react";
import ReactDOM from "react-dom/client";
import '/style.css'; 

//  Sample book data
const books = [
  {
    title: "Atomic Habits",
    price: 499,
    img: "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Alchemist",
    price: 399,
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Deep Work",
    price: 450,
    img: "https://m.media-amazon.com/images/I/81GqtNbs+PL._AC_UF1000,1000_QL80_.jpg",
  },
];

//  Book component
function Book({ book }) {
  return (
    <div className="card" style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <img src={book.img} height="200" width="200" alt="book-img" />
      <h3>Title: {book.title}</h3>
      <h4>Price: Rs. {book.price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

//  App component
function App() {
  return (
    <div className="booklist">
      {books.map((b, i) => (
        <Book key={i} book={b} />
      ))}
    </div>
  );
}

// Render the app
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);



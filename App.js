import React, { useState, useEffect } from 'react';  
import './App.css';  

function App() {  
  const [products, setProducts] = useState([]);  
  
  useEffect(() => {  
    const sampleData = [  
      { "productName": "Tablet 1", "price": 299, "rating": 4.8, "discount": 20, "availability": "yes" },  
      { "productName": "Tablet 2", "price": 399, "rating": 4.7, "discount": 15, "availability": "out-of-stock" },  
      { "productName": "Tablet 3", "price": 499, "rating": 4.6, "discount": 10, "availability": "yes" },  
      { "productName": "Tablet 4", "price": 599, "rating": 4.5, "discount": 25, "availability": "yes" },  
      { "productName": "Tablet 5", "price": 699, "rating": 4.4, "discount": 5, "availability": "out-of-stock" }  
    ];  
  
    // Simulate fetching data  
    setTimeout(() => {  
      setProducts(sampleData);  
    }, 1000);  
  }, []);  
  
  return (  
    <div className="App">  
      <header className="App-header">  
        <h1>Top Tablets</h1>  
      </header>  
      <main>  
        <div className="product-list">  
          {products.map((product, index) => (  
            <div key={index} className="product-card">  
              <h2>{product.productName}</h2>  
              <p>Price: ${product.price}</p>  
              <p>Rating: {product.rating} / 5</p>  
              <p>Discount: {product.discount}%</p>  
              <p className={product.availability === 'yes' ? 'available' : 'out-of-stock'}>Availability: {product.availability}</p>  
            </div>  
          ))}  
        </div>  
      </main>  
      <footer className="App-footer">  
        <p>© 2024 My Custom Tablet Store</p>  
      </footer>  
    </div>  
  );  
}  
  
export default App;

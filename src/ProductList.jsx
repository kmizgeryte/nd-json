
// ProductList.jsx
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Card from './Card';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await fetch('http://localhost:3000/products');
        const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h1>Product List</h1>
    <div className='korteles'>
      
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          title={product.title}
          price={product.price}
          description={product.description}
          productId={product.id}
        />
      ))}
    </div>
    </>
    
  );
};

export default ProductList;


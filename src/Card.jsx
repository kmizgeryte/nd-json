// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, title, price, description, productId }) => {
  return (
    <div className='kortele1'>
      <h1>{name}</h1>
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <Link to={`/reviews/${productId}`}>
        <button>Show Reviews</button>
      </Link>
    </div>
  );
};

export default Card;
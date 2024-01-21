// ReviewsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsResponse = await fetch(`http://localhost:3000/reviews?productId=${productId}`);
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <>
    <h1>Reviews for Product {productId}</h1>
     <div className='reviewCard'>
      {reviews.map((review) => (
        <div className='reviewCard1' key={review.id}>
          <p>Client Name: {review.clientName}</p>
          <p>Rating: {review.rating}</p>
          <h3>Comment: {review.comment}</h3>
          <p>Description: {review.description}</p>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default ReviewsPage;



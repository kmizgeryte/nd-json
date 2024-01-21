import './App.css'

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ReviewsPage from './ReviewsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/reviews/:productId" element={<ReviewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react';
import './Review.css';

const Review = ({ reviews }) => {
    const { name, review, rating} = reviews;
    return (
        <div className='review-card'>
            <div className='review-info'>
                <h2>{name}</h2>
                <p>{review}</p>
                <span className='bold'>Rating: {rating}</span>
            </div>
        </div>
    );
};

export default Review;
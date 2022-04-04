import React from 'react';
import './Review.css';

const Review = ({ reviews }) => {
    const { name, img, review, rating} = reviews;
    return (
        <div className='review-card'>
            <img src="" alt="" />
            <div className='review-info'>
                <h2>{name}</h2>
                <p>{review}</p>
                <span>{rating}</span>
            </div>
        </div>
    );
};

export default Review;
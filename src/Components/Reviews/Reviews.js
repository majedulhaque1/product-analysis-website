import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className=''>
            <h2 className='review-title'>What's our Customers Reviews.</h2>
            <div className='reviews-card'>
                {
                    reviews.map(review => <Review key={review.id} reviews={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
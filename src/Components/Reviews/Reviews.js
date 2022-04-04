import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    // const { name, review, rating } = reviews;
    const [reviews, setReviews] = useReview();
    // console.log(reviews);
    return (
        <div className='reviews-card'>
            {
                reviews.map(review => <Review key={review.id} reviews={review}></Review>)
            }
        </div>
    );
};

export default Reviews;
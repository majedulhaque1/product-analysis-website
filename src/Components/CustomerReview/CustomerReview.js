import React from 'react';
import './CustomerReview.css';

const CustomerReview = ({reviewItem}) => {
    const {name, img, review, rating} = reviewItem;
    return (
        <div className='reviewitem-card'>
            <img src="" alt="" />
            <div>
                <h2>{name}</h2>
                <p>{review}</p>
                <span className='bold'>Rating: {rating}</span>
            </div>
        </div>
    );
};

export default CustomerReview;
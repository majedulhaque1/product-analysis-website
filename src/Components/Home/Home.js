import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import CustomerReviews from '../CustomersReviews/CustomerReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='title'>Customer Reviews(3)</h2>
                <CustomerReviews></CustomerReviews>
            </div>
        </div>
    );
};

export default Home;
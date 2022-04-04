import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-left'>
                <h1>
                    <span>Your Next Watch.</span><br />
                    <span>Your Best Watch.</span>
                </h1>
                <p>
                    Welcome to our website.We are provide best and relaiable watch.We have lots of collections.We are sell watch with afordable price.We ensure quality our watch.
                </p>
                <button>Live Demo</button>
            </div>
            <div className='banner-right'>
                <img src="https://img.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg?t=st=1649015847~exp=1649016447~hmac=3ececc2ff6c2e2bbd181c2002df0e3c16ec1e3eeb45553e2a30d63f459f985d5&w=1380" alt="" />
            </div>
        </div>
    );
};

export default Banner;
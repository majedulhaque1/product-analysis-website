import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-left'>
                <h1>
                    <span>Your Next Watch.</span><br />
                    <span>Your Next Watch.</span>
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed labore mollitia sint nihil, fugit iste consequatur excepturi doloremque quasi. Libero tenetur placeat omnis officia dignissimos totam, cum sunt soluta quia!
                </p>
                <button>Explore More</button>
            </div>
            <div className='banner-right'>
                <img src="https://img.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg?t=st=1649015847~exp=1649016447~hmac=3ececc2ff6c2e2bbd181c2002df0e3c16ec1e3eeb45553e2a30d63f459f985d5&w=1380" alt="" />
            </div>
        </div>
    );
};

export default Banner;
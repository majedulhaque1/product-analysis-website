import useReview from '../../hooks/useReview';
import './CustomerReviews.css';
import CustomerReview from '../CustomerReview/CustomerReview';
import { useNavigate } from 'react-router-dom';

const CustomerReviews = () => {
    const [reviews, setReviews] = useReview();
    const customerReview = reviews.slice(0, 3);
    const navigate = useNavigate();
    const getAllReviews = () => {
        navigate('/reviews');
    }
    return (
        <div className='customerreview-container'>
            <div className='customerreview-card'>
                {
                    customerReview.map(reviewItem => <CustomerReview key={reviewItem.id} reviewItem={reviewItem}></CustomerReview>)
                }
            </div>
            <div>
                <button onClick={getAllReviews}>See all Reviews</button>
            </div>
        </div>
    );
};

export default CustomerReviews;
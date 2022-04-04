import useReview from '../../hooks/useReview';
import './CustomerReviews.css';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useReview();
    const customerReview = reviews.slice(0,3);
    return (
        <div>
            <div className='customerreview-card'>
                {
                    customerReview.map(reviewItem => <CustomerReview key={reviewItem.id} reviewItem={reviewItem}></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;
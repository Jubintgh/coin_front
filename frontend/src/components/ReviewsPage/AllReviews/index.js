import React, {useEffect} from 'react'; 
import * as reviewActions from '../../../store/reviews';
import { deleteReview } from '../../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Reviews.css'


export default function AllReviews(){

    const dispatch = useDispatch();
    let {productId} = useParams();
    productId = Number(productId)
    
    const currUser = useSelector(state => state.session.user ? state.session.user.id : null)
    const reviews = useSelector(state => state.reviews)
    const revArr = Object.values(reviews)

    
    useEffect(()=> {
        dispatch(reviewActions.getReviews(productId));
    },[dispatch, productId, currUser])
    
    const deleteComment = async(userId, reviewId) => {
        if(userId === currUser){
            console.log('HIT?', reviewId)
            await dispatch(reviewActions.deleteReview(reviewId));
            await dispatch(reviewActions.getReviews(productId))
        }
    }

    return(
        <div>
            {
                revArr.length && revArr.map(rev => {
                    return (
                        <div key={rev.id} className={'review-class'}>
                            <img className={'review__pic'} alt={'profile-pic'} src={rev.User?.profilePicUrl}></img>
                                <div className='review-holder'>
                                    <p className={'review__name'}>{rev.User?.username}</p>
                                    <p className={'review__body'}>{rev.review}</p>
                                    <button className='review_button' style={{visibility: rev.User?.id === currUser ? 'visible' : 'hidden'}} onClick={() => deleteComment(rev.User?.id ,rev.id)}>delete</button>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

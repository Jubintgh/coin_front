import React, {useEffect} from 'react'; 
import * as reviewActions from '../../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


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
    
    const deleteComment = (userId, reviewId) => {
        if(userId === currUser){
            dispatch(reviewActions.deleteReview(reviewId));
        }
    }

    return(
        <div>
            {
                revArr.length && revArr.map(rev => {
                    return (
                        <div key={rev.id}>
                            <img className={'review__pic'} alt={'profile-pic'} src={rev.User?.profilePicUrl}></img>
                                <div>
                                    <p className={'review__name'}>{rev.User?.username}</p>
                                    <p className={'review__title'}>{rev.review}</p>
                                </div>
                            <button style={{visibility: rev.User?.id === currUser ? 'visible' : 'hidden'}} onClick={() => deleteComment(rev.User?.id ,rev.id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>

    )
}

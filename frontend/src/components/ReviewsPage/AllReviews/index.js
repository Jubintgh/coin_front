import React, {useEffect, useState} from 'react'; 
import * as reviewActions from '../../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


export default function AllReviews(){

    const dispatch = useDispatch();
    let {productId} = useParams();
    productId = Number(productId)
    
    useEffect(()=> {
        dispatch(reviewActions.getReviews(productId));
    },[dispatch, productId])
    
    const reviews = useSelector(state => state.reviews)
    const revArr = Object.values(reviews)

    return(

        <div>
            {
                revArr.map(rev => {
                    return (
                        <div key={rev.id}>
                            <img alt={'profile-pic'}></img>
                            <div>
                                <p className={'review__name'}>NAME</p>
                                <p className={'review__title'}>{rev.review}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

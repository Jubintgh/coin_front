import React, {useEffect, useState} from 'react'; 
import * as reviewActions from '../../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import ReviewDetail from '../ReviewComp/index'
import { Link, useParams } from 'react-router-dom';


export default function AllReviews(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(reviewActions.getReviews());
    },[dispatch])

    const reviews = useSelector(state => state.reviews)
    const revArr = Object.values(reviews)
    const {productId} = useParams();
    console.log(productId, 'hit this one');

    return(

        <div>
            {
                revArr.map(rev => {
                    if(rev.productId == productId){

                        return (
                            <div>
                                <img alt={'profile-pic'}></img>
                                <div>
                                    <p className={'review__name'}>NAME</p>
                                    <p className={'review__title'}>{rev.review}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>

    )
}

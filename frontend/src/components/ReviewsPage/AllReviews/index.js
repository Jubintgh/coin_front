import React, {useEffect, useState} from 'react'; 
import * as reviewActions from '../../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import ReviewDetail from '../AllReviews/index'
import { Link, useParams } from 'react-router-dom';


export default function AllReviews(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(reviewActions.getReviews());
    },[dispatch])

    const reviews = useSelector(state => state.reviews)
    const revArr = Object.values(reviews)

    return(
        <main>
            {
                <div>
                    {
                        revArr.map(rev => {
                            <ReviewDetail/>
                        })
                    }
                </div>
            }
        </main>
    )
}

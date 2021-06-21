import React, {useEffect, useState} from 'react';
import * as productActions from '../../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function Home(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(productActions.getProducts());
    },[])


    return(
        <form>
            <div>
                {/* <p>{console.log(allProds)}</p> */}
            </div>
        </form>
    )
}

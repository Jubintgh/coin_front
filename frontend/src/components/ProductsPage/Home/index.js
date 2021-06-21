import React, {useState} from 'react';
import * as productActions from '../../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function Home(){

    return(
        <form>
            <div>
                {/* <p>{console.log(productActions.getProducts)}</p> */}
            </div>
        </form>
    )
}

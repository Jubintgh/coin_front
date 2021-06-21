import React from 'react';
import * as productActions from '../../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function Home(){

    return(
        <form>
            <div>
                {productActions.getProducts.map(product => {
                    <li>{product}</li>
                })}
            </div>
        </form>
    )
}
import React, {useEffect, useState} from 'react'; 
import * as productActions from '../../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from '../ProductComp/index'
import {NavLink, Route, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Home(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(productActions.getProducts());
    },[dispatch])

    const products = useSelector(state => state.products)

    return(
        <main>
            {products.products.map(product => (
                <Link to={`${product.id}`}className={'product__container'}>
                    <ProductDetail product={product}/>
                </Link>
            ))}
        </main>
    )
}

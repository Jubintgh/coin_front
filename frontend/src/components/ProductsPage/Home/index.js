import React, {useEffect, useState} from 'react'; 
import * as productActions from '../../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from '../ProductComp/index'
import { Link, useParams } from 'react-router-dom';


export default function Home(){

    const productId = useParams().productId;
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(productActions.getProducts());
    },[dispatch])

    const products = useSelector(state => state.products)
    const prodArr = Object.values(products)

    return(
        <main>
            {productId ? <ProductDetail id={productId}/> : prodArr.map(product => (
                <Link key={product.id} to={`products/${product.id}`} className={'product__container'}>
                    <ProductDetail id={product.id}/>
                </Link>
            ))}
        </main>
    )
}

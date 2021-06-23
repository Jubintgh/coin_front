import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductDetail from "../ProductComp"
import * as productActions from '../../../store/products';

export default function Product(){

    const dispatch = useDispatch();
    

    const {productId} = useParams();
    useEffect(()=> {
        dispatch(productActions.getProducts());
    },[dispatch])

    return (
        <ProductDetail id={productId}/>
    )
}
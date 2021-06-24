import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductDetail from "../ProductComp";
import AllReviews from "../../ReviewsPage/AllReviews";
import * as productActions from '../../../store/products';
import * as reviewActions from '../../../store/reviews'

export default function Product(){

    const dispatch = useDispatch();
    

    const {productId} = useParams();
    useEffect(()=> {
        dispatch(productActions.getProducts());
    },[dispatch])

    useEffect(()=> {
        dispatch(reviewActions.getReviews());
    },[dispatch])


    return (
        <>
            <ProductDetail id={productId}/>
            <AllReviews/>
        </>
    )
}
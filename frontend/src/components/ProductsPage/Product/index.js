import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "../ProductComp";
import * as productActions from '../../../store/products';
import AllReviews from "../../ReviewsPage/AllReviews/index";


export default function Product(){

    const dispatch = useDispatch();


    const {productId} = useParams();
    useEffect(()=> {
        dispatch(productActions.getProducts());
    },[dispatch])
    


    return (
        <>
            <ProductDetail id={productId}/>
            <div>
                <h2>Comments:</h2>
            </div>
            <AllReviews/>
        </>
    )
}
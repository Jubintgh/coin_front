import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, updateOneProduct } from "../../../store/products";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

export default function ReviewDetail(){

    const dispatch = useDispatch();

    return(
        <div>
            <img></img>
            <div>
                <div className={'review__name'}>NAME</div>
                <div className={'review__title'}>REVIEW</div>
            </div>
        </div>
    )
}
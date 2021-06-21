import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';



export function productComp(){
    const {productId} = useParams;
    

    return(
        <div className='productContainer'>
            <a className='productImage'></a>
            <div className='productTitle'></div>
            <div className='productDescription'></div>
            <div className='productStats'></div>
        </div>
    )
}
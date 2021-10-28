const express = require('express');
const asyncHandler = require('express-async-handler');



router.get('/:id', asyncHandler(async (req, res) => {

}))


router.post('/', asyncHandler(async (req, res) => {
    const {userId, productId, review} = req.body;
    let newreview = await Review.create({
    })
    if(newreview){

    }
}))
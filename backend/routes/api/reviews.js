// const express = require('express');
// const asyncHandler = require('express-async-handler');

// const { setTokenCookie, requireAuth } = require('../../utils/auth');
// const { Product, Review } = require('../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

// const router = express.Router();

// router.get('/', asyncHandler(async (req, res) => {
//     const reviews = await Review.findAll();
//     return reviews;
// }))

// router.post('/', asyncHandler(async (req, res) => {
//     const {userId, productId, review} = req.body;
//     const newreview = await Review.create({
//         userId,
//         productId,
//         review
//     })
//     if(newreview) return res.json(review);
// }))

// router.delete('/', asyncHandler(async (req, res) => {

//     const {id} = req.body;

//     await Review.destroy({
//         where: {
//             id
//         }
//     })
//     return;
// }))


// module.exports = router;
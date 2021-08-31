const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Review } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const reviews = await Review.findAll({
        include: {
            model: User
        },
        where: {
            productId: id
        }
    });
    return res.json(reviews);
}))

router.post('/', asyncHandler(async (req, res) => {
    const {userId, productId, review} = req.body;
    let newreview = await Review.create({
        userId,
        productId,
        review
    })
    if(newreview){
        newreview = await Review.findAll({
            include: {
                model: User
            },
            where: {
                userId: userId
            }
        })
        return res.json(newreview);
    }
}))

router.delete('/', asyncHandler(async (req, res) => {

    const {id} = req.body;
    await Review.destroy({
        where: {
            id
        }
    })
    return id;
}))


module.exports = router;
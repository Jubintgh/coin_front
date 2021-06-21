const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Product } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateNewProduct = [
    check(title)
        .exists({checkFalsy: true})
        .isLength({max: 500})
        .isString()
        .withMessage('Please provide a valid title.'),
    check(imageUrl)
        .exists({checkFalsy: true})
        .isString()
        .withMessage('Please provide a valid URL.'),
    check(description)
        .exists({checkFalsy: true})
        .isString()
        .withMessage('Please provide a valid description.'),
    handleValidationErrors
];

router.get('/', async (req, res) => {
    const productList = await getAllProducts();
    return productList;
})


router.post('/', validateNewProduct, asyncHandler(async (req, res) => {

    const { ownerId, title, imageUrl, description } = req.body;
    const product = await Product.createProduct(ownerId, title, imageUrl, description);
    
    if(product) res.redirect('/home');
}))

router.delete('/:id', asyncHandler(async (req, res) => {

    const productId = req.params;
    await deleteProduct(productId);
    return;
}))

router.put('/:id', validateNewProduct, asyncHandler( async(req, res) => {
    const productId = req.params;
    const currentProduct = getCurrentProductById(productId);

    currentProduct.update({});
}))

const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Product } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// const validateNewProduct = [
//     check(title)
//         .exists({checkFalsy: true})
//         .isLength({max: 500})
//         .isString()
//         .withMessage('Please provide a valid title.'),
//     check(imageUrl)
//         .exists({checkFalsy: true})
//         .isString()
//         .withMessage('Please provide a valid URL.'),
//     check(description)
//         .exists({checkFalsy: true})
//         .isString()
//         .withMessage('Please provide a valid description.'),
//     handleValidationErrors
// ];

router.get('/', asyncHandler(async (req, res) => {
    const productList = await Product.getAllProducts();
    return res.json(productList);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const productId = req.params;
    const product = await Product.getCurrentProductById(productId)
    return res.json(product);
}))


router.post('/', asyncHandler(async (req, res) => {
    const { ownerId, title, imageUrl, description } = req.body;
    const product = await Product.createProduct(ownerId, title, imageUrl, description);
    return res.json(product);
}))

router.delete('/:id', asyncHandler(async (req, res) => {

    const {id} = req.params;
    Product.destroy({
        where: {
          id
        }
    })
    return;
}))

router.put('/api/products/:id', asyncHandler( async(req, res) => {
    // const {id} = req.params;
    // const currentProduct = Product.getCurrentProductById(id);

    // currentProduct.update({});
    const id = Number(req.body.product.id)
    const currentProduct = await Product.findByPk(id);
    console.log(currentProduct)
    await currentProduct.update(req.body)
    return res.json(currentProduct);
}))

module.exports = router;
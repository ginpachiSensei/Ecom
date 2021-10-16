import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import {
    getProducts,
    getProductById,
  } from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export { getProducts, getProductById }
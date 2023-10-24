import express from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js'
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router()

//Routes
//Create product
router.post(
  '/create-product', 
  requireSignIn, 
  isAdmin, 
  formidable(), 
  createProductController
)

//Get all products
router.get('/get-product',getProductController)

//Get single product
router.get('/get-product/:slug',getSingleProductController)

//Get photo
router.get('/product-photo/:pid', productPhotoController)

//Update product
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//Delete products
router.delete("/delete-product/:pid", deleteProductController);

//Filter Product
router.post('/product-filters',productFilterController)

//Product Count
router.get('/product-count',productCountController)

//product per page
router.get('/product-list/:page', productListController)

//Search Product
router.get('/search/:keyword', searchProductController)

//Similar Product
router.get('/related-product/:pid/:cid', relatedProductController)

//Category wise product
router.get('/product-category/:slug', productCategoryController)

//Payment Routes
//Token
router.get('/braintree/token',braintreeTokenController)

//Payment
router.post('/braintree/payment',requireSignIn,braintreePaymentController)

export default router
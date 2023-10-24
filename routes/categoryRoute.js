import express from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js'
import { 
  categoryController, 
  createCategoryController, 
  singleCategoryController, 
  updateCategoryController,
  deleteCategoryController
} from "./../controllers/categoryController.js";

const router = express.Router()

//Routes
//Create category
router.post(
  '/create-category', 
  requireSignIn, 
  isAdmin, 
  createCategoryController
);

//Update category
router.put(
  '/update-category/:id', 
  requireSignIn, 
  isAdmin, 
  updateCategoryController
);

//Get all Categories
router.get('/get-category', categoryController)

//Get single Categories
router.get('/single-category/:slug', singleCategoryController)

//Delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)

export default router
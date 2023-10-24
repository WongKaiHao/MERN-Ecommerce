import express from 'express';
import { 
    registerController, 
    loginController, 
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusUpdateController,
} from '../controllers/authController.js';
import { 
    requireSignIn,
    isAdmin,
} from '../middlewares/authMiddleware.js';

//router object 
const router= express.Router();

//routing
//Register  || method POST
router.post('/register', registerController);

//Login || POST
router.post('/login',loginController);

//Forget Password
router.post('/forgot-password',forgotPasswordController)

//Test routes
router.get('/test',requireSignIn, isAdmin, testController);

//Protected User route auth
router.get("/user-auth", requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
})

//Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
})

//Update user profile
router.put('/profile', requireSignIn, updateProfileController)

//Orders
router.get('/orders',requireSignIn, getOrdersController)

//Orders Manage
router.get('/all-orders',requireSignIn, isAdmin,getAllOrdersController)

//Update Order Status
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusUpdateController)

export default router;
import express from "express"
import userController from '../controllers/userController.js'
import authMiddleware from '../middleware/auth.js'
const router = express.Router();



router.post('/register', userController.registerUser)
router.post('/login', userController.LoginUser)
router.get('/getUserInfo', authMiddleware.auth,userController.getUserInfo)
router.get('/getAllUser',userController.getAllUser);
// router.get('/getUserByID/:ID',userController.getUserByID);
// router.put('/updateUser/:ID',userController.updateUser);
// router.put('/deleteUser/:ID',userController.deleteUser);
// router.get('/getUserByQuery',userController.getUserByQuery);

export default router
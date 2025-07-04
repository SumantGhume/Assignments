import express from 'express'
import ProductController from '../controllers/productController.js'
const router = express.Router();

router.post('/create',ProductController.createProduct);
router.get('/getAllProduct',ProductController.getAllProduct);
router.get('/getProductCount',ProductController.getProductCount);
router.get('/getProductByID/:ID',ProductController.getProductByID);
router.put('/updateProduct/:ID',ProductController.updateProduct);
router.put('/deleteProduct/:ID',ProductController.deleteProduct);
router.get('/getProductByQuery',ProductController.getProductByQuery);



export default router
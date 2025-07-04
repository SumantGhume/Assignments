import express from 'express'
import brandController from '../controllers/brandController.js'
import AuthMiddleware from "../middleware/auth.js"
const router = express.Router();

router.post('/create',AuthMiddleware.auth,brandController.createBrand);
router.get('/getAllBrand',brandController.getAllBrand);
router.get('/getBrandByID/:ID',brandController.getBrandByID);
router.put('/updateBrand/:ID',brandController.updateBrand);
router.put('/deleteBrand/:ID',brandController.deleteBrand);
router.get('/getBrandByQuery',brandController.getBrandByQuery);



export default router
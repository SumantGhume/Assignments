import express from 'express'
import CategoryController from '../controllers/categoryController.js'
const router = express.Router();

router.post('/create',CategoryController.createCategory);
router.get('/getAllCategory',CategoryController.getAllCategory);
router.get('/getCategoryByID/:ID',CategoryController.getCategoryByID);
router.put('/updateCategory/:ID',CategoryController.updateCategory);
router.put('/deleteCategory/:ID',CategoryController.deleteCategory);
router.get('/getCategoryByQuery',CategoryController.getCategoryByQuery);



export default router
const express =require('express')

const categoryController = require('../Controller/categoryController')

const router = express.Router();

router.get('/AllCategory',categoryController.AllCategory)

router.get('/CategoryByID/:ID',categoryController.CategoryByID)

router.post('/CreateCategory',categoryController.CreateCategory)

router.delete('/deleteCategory/:ID',categoryController.deleteCategory)

router.put('/UpdateCategory/:ID',categoryController.UpdateCategory)

module.exports = router;

// /api/category/AllCategory
const express =require('express')

const productcontroller = require('../Controller/pruductcontroller')

const router = express.Router();

router.get('/AllProduct',productcontroller.AllProduct)

router.get('/Product/:ID',productcontroller.Product)

router.post('/CreateProduct',productcontroller.CreateProduct)

router.delete('/deleteProduct/:ID',productcontroller.deleteProduct)

router.put('/UpdateProduct/:ID',productcontroller.UpdateProduct)

module.exports = router;
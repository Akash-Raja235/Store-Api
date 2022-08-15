
const express = require('express')

const router = express.Router()

const {getAllProductsStatic,getAllProducts} = require('../controller/controller')


router.get("/", getAllProducts);
router.get("/static", getAllProductsStatic);

module.exports = router;
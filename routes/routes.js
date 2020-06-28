const express = require('express')
const router = express.Router()

//Cafes
const cafesCtrl = require('../controllers/cafeController.js')
router.get('/cafes', cafesCtrl.read)
router.get('/cafes/create', cafesCtrl.create)
router.post('/cafes', cafesCtrl.store)
router.get('/cafes/:id/edit', cafesCtrl.edit)
router.post('/cafes/:id', cafesCtrl.update)
router.get('/cafes/:id/delete', cafesCtrl.delete)

//Products
const productsCtrl = require('../controllers/productsController.js')
router.get('/products', productsCtrl.read)
router.get('/products/create', productsCtrl.create)
router.post('/products', productsCtrl.store)
router.get('/products/:id/edit', productsCtrl.edit)
router.post('/products/:id', productsCtrl.update)
router.get('/products/:id/delete', productsCtrl.delete)

// Home
const mainCtrl = require('../controllers/homeController.js')
router.get('/', mainCtrl.home)

// Error
router.use((request, response)=>{
  response.status('404').send('404, page not found');
})

module.exports = router
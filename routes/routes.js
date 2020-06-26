const express = require('express')
const router = express.Router()
const mainCtrl = require('../controllers/homeController.js')
const productsCtrl = require('../controllers/productsController.js')


//Products
router.get('/products', productsCtrl.read)
// router.get('/products/create', productsCtrl.create)
// router.post('/products', productsCtrl.store)
// router.get('/products/edit', productsCtrl.edit)
// router.post('/products/edit', productsCtrl.update)
// router.get('/products', productsCtrl.delete)

// Home
router.get('/', mainCtrl.home)

// Error
router.use((request, response)=>{
  response.status('404').send('404, page not found');
})

module.exports = router
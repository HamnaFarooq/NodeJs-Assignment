const express = require('express')
const router = express.Router()

//Sessions
const sessionsCtrl = require('../controllers/sessionsController.js')
router.get('/sessions', sessionsCtrl.read)
router.get('/sessions/create', sessionsCtrl.create)
router.post('/sessions', sessionsCtrl.store)
router.get('/sessions/:id/edit', sessionsCtrl.edit)
router.post('/sessions/:id', sessionsCtrl.update)
router.get('/sessions/:id/delete', sessionsCtrl.delete)

//Programs
const programCtrl = require('../controllers/programController.js')
router.get('/program', programCtrl.read)
router.get('/program/create', programCtrl.create)
router.post('/program', programCtrl.store)
router.get('/program/:id/edit', programCtrl.edit)
router.post('/program/:id', programCtrl.update)
router.get('/program/:id/delete', programCtrl.delete)

//Societies
const societiesCtrl = require('../controllers/societiesController.js')
router.get('/societies', societiesCtrl.read)
router.get('/societies/create', societiesCtrl.create)
router.post('/societies', societiesCtrl.store)
router.get('/societies/:id/edit', societiesCtrl.edit)
router.post('/societies/:id', societiesCtrl.update)
router.get('/societies/:id/delete', societiesCtrl.delete)

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
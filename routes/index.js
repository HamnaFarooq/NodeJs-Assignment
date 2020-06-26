const express = require('express')
const router = express.Router()
const mainCtrl = require('../controllers/homeController.js')

// Home
router.get('/', mainCtrl.home)

router.use((request, response)=>{
  response.status('404').send('404, page not found');
})

module.exports = router
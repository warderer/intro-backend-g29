const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es /homes, deberia ejecutar el controlador createHome

router.post('/homes', homeController.createHome)

module.exports = router
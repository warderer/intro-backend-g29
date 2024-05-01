const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es /homes, deberia ejecutar el controlador createHome

router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:houseId', homeController.findOneHome)
router.patch('/homes/:houseId', homeController.updateOneHome)
router.delete('/homes/:houseId', homeController.softDeleteOneHome)
router.delete('/homes/destroy/:houseId', homeController.destroyOneHome)

module.exports = router

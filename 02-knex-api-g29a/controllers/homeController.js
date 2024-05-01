/* Los controladores tienen la logica de negocio */
const modelHomes = require('../models/Homes')

// CREATE
const createHome = (req, res) => {
  // Aquí yo debería crear el home
  // res.send({ message: 'Hola Mundo! 🌍' })
  modelHomes.create(req.body)
    .then(home => {
      res.status(201).send(home)
    })
    .catch(error => {
      res.status(400).send(error)
    })
}

// READ
const findAllHomes = (req, res) => {
  modelHomes.findAll()
    .then(homes => res.status(200).send(homes))
    .catch(error => res.status(400).send(error))
}

const findOneHome = (req, res) => {
  modelHomes.findOne(req.params.houseId)
    .then(home => res.status(200).send(home))
    .catch(error => res.status(400).send(error))
}

// UPDATE
const updateOneHome = (req, res) => {
  modelHomes.update(req.params.houseId, req.body)
    .then(home => res.status(200).send(home))
    .catch(error => res.status(400).send(error))
}
// DELETE

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome
}

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

// UPDATE

// DELETE

module.exports = {
  createHome
}

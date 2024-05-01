// Dependiendo de la variable de entorno del sistema, va a usar la configuración adecuada de la base de datos.
const knexfile = require('./knexfile')
const knex = require('knex')

// Tomar la configuración del entorno de node, y si no existe por defecto usaremos development
const ENV = process.env.NODE_ENV || 'development'

// Mandar a llamar la configuración correcta de knexfile
module.exports = knex(knexfile[ENV])

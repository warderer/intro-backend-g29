// El modelo trae los datos de la base de datos que
// NO se encarga de validar datos, ni resolver promesas, eso es trabajo del controlador en MVC

// Paso #1 Necesito importar la configuración del entorno de knex y los detalles de la conexión a la base de datos que
const knex = require('../config')

// Paso #2 Crear una función que traiga los datos que yo requiera de la base de datos
const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar? { title: 'titulo', description: 'descripcion'}
    .into('homes') // ¿En que tabla? - homes
    .returning('*') // ¿Qué datos quiero que me regrese? - todos los datos
}

const findAll = () => {
  return knex
    .select(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at'])
    .from('homes')
    .where('active', true) // traemos los campos que no hayamos hecho un softdelete
}

const findOne = (houseId) => {
  return knex
    .select(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at'])
    .from('homes')
    .where('active', true)
    .where('house_id', houseId) // buscamos por el id de la casa
}

const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate) // Información a actualizar
    .from('homes')
    .where({ house_id: houseId }) // ¿Qué casa quiero actualizar?
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at'])
}

// Borrado lógico, solo cambio el campo active a false
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where({ house_id: houseId })
}

// Borrado real de la base de datos
const destroy = (houseId) => {
  return knex
    .delete() // del
    .from('homes')
    .where({ house_id: houseId })
}

// Paso #3 Exportar la función para que pueda ser usada en otro archivo
module.exports = {
  create,
  findAll,
  findOne,
  update,
  softDelete,
  destroy
}

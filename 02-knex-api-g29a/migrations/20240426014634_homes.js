/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
/* Aqui colocaremos toda la lógica de creación de tablas, actualización de campos, etc. */
  return knex.schema.hasTable('homes').then((exists) => {
    if (!exists) {
      // Si la tabla no existe, entonces la creo
      return knex.schema.createTable('homes', (table) => {
        // Aqui coloco los atributos de la tabla.
        // Sintaxis: table.tipo_de_dato('nombre_del_campo').restricciones
        table.increments('house_id').primary() // en knex usamos increments en vez de serial como tipo de dato para llave primaria
        table.string('title').notNullable() // notNullabe es que no puede quedar nulo
        table.string('description')
        table.integer('guest')
        table.string('address')
        table.decimal('rental_price', 10, 2) // 10 digitos en total, 2 decimales
        table.boolean('active').notNullable().defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now()) // knex.fn.now() es una función de knex para obtener la fecha y hora actual
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS.DOWN */
// Aquí colocaremos toda la lógica que nos va a permitir deshacer
// los cambios que hicimos en la función exports.up

exports.down = function (knex) {
  return knex.schema.hasTable('homes').then((exists) => {
    if (exists) {
      // Si la tabla existe, la elimino
      return knex.schema.dropTable('homes')
    }
  })
}

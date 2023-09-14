'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentTypeSchema extends Schema {
  up () {
    this.create('appointment_types', (table) => {
      table.increments()
      table.string('description', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('appointment_types')
  }
}

module.exports = AppointmentTypeSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()
      table
        .integer('task')
        .unsigned()
        .references('id')
        .inTable('tasks')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE') 
      table
        .integer('appointmentsType')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('appointment_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description', 1000).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EisenhowerSchema extends Schema {
  up () {
    this.create('eisenhowers', (table) => {
      table.increments()
      table.string('description', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('eisenhowers')
  }
}

module.exports = EisenhowerSchema

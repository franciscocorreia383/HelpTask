'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CheckListItensSchema extends Schema {
  up () {
    this.create('check_list_itens', (table) => {
      table.increments()
      table.string('iten',255).notNullable()
      table.boolean('finished').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('check_list_itens')
  }
}

module.exports = CheckListItensSchema

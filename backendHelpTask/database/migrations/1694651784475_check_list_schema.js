'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CheckListSchema extends Schema {
  up () {
    this.create('check_lists', (table) => {
      table.increments()
      table
        .integer('checkListItens')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('check_list_itens')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description', 1000)
      table.datetime('finishedAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('check_lists')
  }
}

module.exports = CheckListSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddStatusToTasksSchema extends Schema {
  up () {
    this.table('tasks', (table) => {
      table.string('status', 200)
    })
  }

  down () {
    this.table('tasks', (table) => {
      table.dropColumn('status')
    })
  }
}

module.exports = AddStatusToTasksSchema

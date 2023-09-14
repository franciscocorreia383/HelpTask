'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PomodoroSchema extends Schema {
  up () {
    this.create('pomodoros', (table) => {
      table.increments()
      table.string('status', 60)
      table.integer('percent', 3)
      table.integer('cicle', 1)
      table.datetime('startedAt')
      table.datetime('stoppedAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('pomodoros')
  }
}

module.exports = PomodoroSchema

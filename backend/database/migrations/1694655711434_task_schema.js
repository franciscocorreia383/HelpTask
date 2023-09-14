'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table
        .integer('user')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('checkList')
        .unsigned()
        .references('id')
        .inTable('check_lists')
        .onUpdate('CASCADE')
        .onDelete('CASCADE') 
      table
        .integer('eisenhower')
        .unsigned()
        .references('id')
        .inTable('eisenhowers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('pomodoro')
        .unsigned()
        .references('id')
        .inTable('pomodoros')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('Title', 200).notNullable()
      table.string('description',1000).notNullable()
      table.datetime('deadline')
      table.time('predict')
      table.string('files', 500)
      table.datetime('finishedAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema

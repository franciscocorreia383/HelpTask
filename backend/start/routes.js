'use strict'

const AuthController = require('../app/Controllers/Http/AuthController')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/sessions', 'SessionController.store')


Route.group(() => {
  Route.get('users', 'AuthController.show')
  Route.put('profile', 'AuthController.update')

  //cadastrar tasks
  Route.post('tasks', 'TaskController.create')
}).middleware(['auth'])

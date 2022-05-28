import Route from '@ioc:Adonis/Core/Route'
import UsersController from '../app/Controllers/Http/UsersController'

Route.group(() => {
  Route.get('user', 'UsersController.index')
  Route.put('user/:id', 'UsersController.update')
  Route.post('user/', 'UsersController.store')
  Route.delete('user/:id', 'UsersController.delete')

  Route.post('login', 'AuthController.login')
  
}
).prefix('api')


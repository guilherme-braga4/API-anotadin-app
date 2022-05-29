import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('user', 'UsersController.index')
  Route.put('user/:id', 'UsersController.update')
  Route.post('user/', 'UsersController.store')
  Route.delete('user/:id', 'UsersController.delete')

  Route.post('login', 'AuthController.login')

  Route.get('cripto', 'CriptosController.index')
  Route.put('cripto/:id', 'CriptosController.update')
  Route.post('cripto/', 'CriptosController.store')
  Route.delete('cripto/:id', 'CriptosController.delete')
  
}
).prefix('api')


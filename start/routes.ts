import Route from '@ioc:Adonis/Core/Route'


Route.post('api/login', 'AuthController.login')
Route.post('api/user/', 'UsersController.store')
//


Route.group(() => {
  Route.get('user', 'UsersController.index')
  Route.get('user/:id', 'UsersController.show')
  Route.put('user/:id', 'UsersController.update')
  Route.delete('user/:id', 'UsersController.delete')

  Route.get('cripto', 'CriptosController.index')
  Route.get('cripto/:id', 'CriptosController.show')
  Route.put('cripto/:id', 'CriptosController.update')
  Route.post('cripto/', 'CriptosController.store')
  Route.delete('cripto/:id', 'CriptosController.delete')

}
).prefix('api').middleware('auth')


//test Requests
Route.group(() => {
  Route.get('user', 'UsersController.index')
  Route.get('user/:id', 'UsersController.show')
  Route.put('user/:id', 'UsersController.update')
  Route.post('user/', 'UsersController.store')
  Route.delete('user/:id', 'UsersController.delete')

  Route.get('cripto', 'CriptosController.index')
  Route.get('cripto/:id', 'CriptosController.show')
  Route.put('cripto/:id', 'CriptosController.update')
  Route.post('cripto/', 'CriptosController.store')
  Route.delete('cripto/:id', 'CriptosController.delete')

}
).prefix('test')


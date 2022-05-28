import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

//Criando um objeto, para inserir diretamente as informações
const user = new User()

export default class UsersController {

  public async index(ctx: HttpContextContract) {
      
      // console.log("Controller User - Método Index" + user),
      
}

  public async update(ctx: HttpContextContract) {
     console.log("Controller User - Método Update")

  }

  public async create(ctx: HttpContextContract) {
      console.log("Controller User - Método Create")

      // user.id = 1
      user.nome = "a",
      user.email = "teste@teste.com",
      user.telefone = 15991851171,
      user.senha = 'bobito123'

      console.log("user", user)
    
      await user.save()
  }

  public async delete(ctx: HttpContextContract) {
     console.log("Controller User - Método Delete")

  }


}

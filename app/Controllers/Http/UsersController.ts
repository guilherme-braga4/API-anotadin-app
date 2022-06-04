// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UsersController {

  public async index({response}) {
    try {
      console.log("Controller User - Método Index")
      // const paramters = request.paramters()
      // console.log('params', paramters)

      const users = await User.all()
      // const users = await User
      //   .query() // 👈now have access to all query builder methods
      //   .where('id', 4)

      //  console.log("users", users) 

      response.status(200).send({message: "Retornando acesso ao user", data: users})
    }
    catch (err) {
      response.status(200).send({message: "Algo deu errado!", error: err})
  }
}

  public async show({response, request}) {
    try {
      console.log("Controller User - Método Show")
      const paramters = request.params()
      console.log('params', paramters)

      const criptos = await User.query().where('id', paramters.id)

      response.status(200).send({message: "Retornando todas as informações desse Usuário", data: criptos})
    }
    catch (err) {
      response.status(200).send({message: "Algo deu errado!" + err})
  }
  }


  public async update({request, response}) {
    try {
     console.log("Controller User - Método Update")
     const data = request.body()
     const params = request.params()
     console.log("data", data)
     await User.query().where('id', params.id).update(data)

    response.status(200).send({message: "Uusário atualizado com sucesso", data: data})
  }
    catch (err) {
    response.status(400).send({message: "Não foi possível atualizar o usuário ", error: err})
  }
  }


  public async store({request, response}) {
    try {
      console.log("Controller User - Método Create")
      const data = request.body()
      console.log("data", data)
      await User.create(data)
      response.status(200).send({message: "Usuário criado com sucesso", data: data})
    }
      catch (err) {
        response.status(400).send({message: "Não foi possível Criar o usuário ", data: err})
      }
  }


  public async delete({request, response}) {
    try {
     console.log("Controller User - Método Delete")
     const params = request.params()
     const user = await User.findOrFail(params.id)
     await user.delete()
     return response.status(200).send({message: "Usuário deletado com sucesso", data: user})
    } catch (err) {
      response.status(400).send({message: "Não foi possível Deletar o usuário ", data: err})
    }
     
  }
}

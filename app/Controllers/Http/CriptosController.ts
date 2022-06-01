// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cripto from '../../Models/Cripto'

export default class CriptosController {
  public async index({response}) {
    try {
      console.log("Controller Cripto - Método Index")
      // const paramters = request.paramters()
      // console.log('params', paramters)

      const users = await Cripto.all()
      // const users = await User
      //   .query() // 👈now have access to all query builder methods
      //   .where('id', 4)

      //  console.log("users", users) 

      response.status(200).send({message: "Retornando todas as Criptomoedas desse Usuário", data: users})
    }
    catch (err) {
      response.status(200).send({message: "Algo deu errado!", error: err})
  }
}

public async show({response, request}) {
  try {
    console.log("Controller Cripto - Método Index")
    const paramters = request.params()
    console.log('params', paramters)

    const criptos = await Cripto.query().where('user_id', paramters.id)

    response.status(200).send({message: "Retornando todas as Criptomoedas desse Usuário", data: criptos})
  }
  catch (err) {
    response.status(200).send({message: "Algo deu errado!" + err})
}
}


  public async update({request, response}) {
    try {
     console.log("Controller Cripto - Método Update")
     const data = request.body()
     const params = request.params()
     console.log("data", data)
     await Cripto.query().where('id', params.id).update(data)

    response.status(200).send({message: "Registro de Criptomoeda atualizada com sucesso", data: data})
  }
    catch (err) {
    response.status(400).send({message: "Não foi possível Atualizar esse Registro de Criptomoeda ", error: err})
  }
  }


  public async store({request, response}) {
    try {
      console.log("Controller Cripto - Método Create")
      const data = request.body()
      console.log("data", data)
      await Cripto.create(data)
      response.status(200).send({message: "Registro de Criptomoeda criado com sucesso", data: data})
    }
      catch (err) {
        response.status(400).send({message: "Não foi possível Criar esse Registro de Criptomoeda ", error: err})
      }
  }


  public async delete({request, response}) {
    try {
     console.log("Controller Cripto - Método Delete")
     const params = request.params()
     const user = await Cripto.findOrFail(params.id)
     await user.delete()
     return response.status(200).send({message: "Registro de Criptomoeda deletado com sucesso", data: user})
    } catch (err) {
      response.status(400).send({message: "Não foi possível deletar esse Registro de Criptomoeda", error: err})
    }
     
  }
}

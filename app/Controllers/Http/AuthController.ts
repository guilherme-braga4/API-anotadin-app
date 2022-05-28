// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class AuthController {

  public async login({request, response, auth}) {
    const email = request.input('email')
    const password = request.input('password')
    console.log(email, password)
  
    try {
      const user = await User.findBy('email', email)

      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '30mins',
        name: user?.serialize().email,
      })

      return { token, user }

    } catch (err) {
      return response.badRequest({message:'Invalid credentials', err: err})
    }
  }
}

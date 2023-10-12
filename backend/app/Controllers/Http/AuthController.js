'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class AuthController {
    async register({request}){
        const data = request.only(['name','userName','email','password','phone','whatsapp'])

        const user = await User.create(data) 
        
        return user
    }

    async show({ auth }){
        const user = await Database
        .column('name','userName','email')
        .table('users')
        .where('id', auth.user.id)
        .first()

        return user
    }
}

module.exports = AuthController

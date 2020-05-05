'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
    static boot(){
        super.boot()


        this.addHook('beforeCreate', async model => {                       //sera criado o token antes de ser registrado no banco de dados
            model.token = await str_random(25)

            const expires_at = new Date() // aqui estamos criando o tempo de expiracão do token

            expires_at.setMinutes(expires_at.getMinutes() +30)  //vai pegar a hora atual e vai colocar mais 30 minutos para a expiracão do token

            model.expires_at = expires_at  //minha model recebe a const expires_at e diz que esse token tem 30 minutos até expirar 
        })
    }

    // formata os valores da data para o padrão do mysql

    static get dates(){
        return ['created_at', 'updated_at', 'expires_at']
    }
}

module.exports = PasswordReset

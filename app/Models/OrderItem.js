'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {

    static get boot(){
        super.boot()

        this.addHook('beforeSave'), 'OrderHook.updateSubtotal'
    }

    //como a tabela OrderItens não tem as colunas timestemp que e o mesmo que created_at e updated_at temos que passar a model NoTimestemp que ;e onde tem a funcão que faz a verificacão quando não a timestemp

    static get traits(){
        return ['App/Models/Traits/NoTimestamp']
    }

    //relacionamento com produto

    products(){
        return this.belongsTo('App/Models/Product')
    }

    orders(){
        return this.belongsTo('App/Models/Order')
    }
}

module.exports = OrderItem

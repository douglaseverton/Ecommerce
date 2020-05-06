'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
    //formata a data no adonis

    static get dates(){
        return ['created_at', 'updated_at', 'valid_inicio', 'valid_final']
    }

    // relacionamento do cupom com o usuario

    users(){
        return this.belongsToMany('App/Models/Users')
    }

    // relacionamento do cupom com produto

    products(){
        return this.belongsToMany('App/Models/Product')
    }

    // relacionamento entre o cupom e o pedido que foi feito para saber se o pedido veio com cupom de desconto

    orders(){
        return this.belongsToMany('App/Models/Order')
    }
}

module.exports = Coupon

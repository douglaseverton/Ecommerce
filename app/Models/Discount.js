'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discount extends Model {
    //vamos retornar uma tabela por a tabela Discount não foi criada

    static get table(){
        return 'coupon_order'
    }

    //vamos relacionar agora com os pedidos que terão o desconto

    orders(){
        return this.belongsTo('App/Models/Order', 'order_id', 'id') // vai buscar pela chave estrangeira e a primaria dentro do pedido / ou seja vai trazer qual o pedido que veio com o desconto
    }

    coupons(){
        return this.belongsTo('App/Models/Coupon', 'coupon_id', 'id')
    }
}

module.exports = Discount

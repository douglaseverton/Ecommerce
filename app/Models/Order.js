'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    static boot(){
        super.boot()

        this.addHook('afterFind', 'OrderHook.updateValues')
        this.addHook('afterPaginate', 'OrderHook.updateCollectionValues')
    }
    // relacionamneto com os itens do pedido
    items(){
        return this.hasMany('App/Models/OrderItem')
    }
    
    //relacionamento do cupom com pedido
    coupons(){
        return this.belongsToMany('App/Models/Coupon')
    }

    //relacionamento com desconto o pedido pode ter desconto

    discounts(){
        return this.hasMany('App/Models/Discount')
    }

    //relacionamneto com o usuario que fez o pedido

    users(){
        return this.belongsTo('App/Models/User', 'user_id', 'id') //vai buscar qual usuario fez o pedido pela chave estrangeira e primaria ou seja vai buscar um usuario por id então e um relacionamneto de um para muitos, um usuario pode fazer varios pedidos
    }
}

module.exports = Order

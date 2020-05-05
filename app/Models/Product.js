'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    /*relaciona o produto com imagem onde vai trazer a imagem principal do produto
    belongsTo faz relacionamento de um para um
    */

    image(){
        return this.belongsTo('App/Models/Image')
    }
    /*
    relacionamento entre produtos e imagens
    galeria de imagens do produto
    belongsToMany relacionamento de muitos para muitos, 1 para muitos etc..
     */

     images(){
         return this.belongsToMany('App/Models/Image')
     }
      
     /*
     relacionamento entre produtos e categoria 
     */

     categories(){
         return this.belongsToMany('App/Models/Category')
     }

     /**
      * relacionamento entre o produto e o cupom de desconto
      */

      coupons(){
          return this.belongsToMany('App/Models/Coupon')
      }


}

module.exports = Product

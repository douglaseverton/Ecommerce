'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    /*
    relacionamento entre a categoria e a imagem da categoria
    */

    image(){
        return this.belongsTo('App/Models/Image')
    }

    /*
    relacionamento entre categoria e o produto dessa categoria
     */
    products(){
        return this.belongsToMany('App/Models/Product')
    }
}

module.exports = Category

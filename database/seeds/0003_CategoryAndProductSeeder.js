'use strict'

/*
|--------------------------------------------------------------------------
| CategoryAndProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategoryAndProductSeeder {
  async run () {
    
    // criei 10 categorias
    const categories = await Factory.model('App/Models/Category').createMany(10)

    // percorri essas 10 categorias passando cada uma delas dentro de uma funcão que o (category)
    await Promise.all(
      categories.map(async category => {
        // essa funcão vai criar 5 produtos para cada uma dessas categorias
        const products = await Factory.model('App/Models/Product').createMany(5)

        /* ae ela vai pegar esses 5 produtos vai percorrer essa lista de 5 produtos e associa cada um desses 5 produtos
        a uma categoria*/ 
        await Promise.all(
          products.map(async product => {
            await product.categories().attach([category.id])
          })
        )
      })
    )
  }
}

module.exports = CategoryAndProductSeeder

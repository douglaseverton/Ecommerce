'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
  up () {
    this.create('coupons', (table) => {
      table.increments()
      table.string('code', 100).notNullable()
      table.dateTime('valid_inicio')  //validade inicial do cupom
      table.dateTime('valid_final')  //  validade final do cupom
      table.integer('quantity').defaultTo(1) // quantidade de cupons caso não seja passado a quantidade será pré determinad 1 cupom
      table.enu('can_use_for', ['product', 'client', 'product_client', 'all'])  //determina onde o cupom vai ser aplicado, produto, cliente, produto_cliente ou em tudo
      table.enu('type', ['free', 'percent', 'currency']).defaultTo('currency') //espicifica o tipo de desconto do cupom se é gratuito, porcentagem ou um valor fixo // defautTo ja deixa pré determinado como valor fixo caso não seja escolhida outra opcão
      table.boolean('recursive').defaultTo('false') // quer dizer se um produto que ja recebeu um cupom pode receber outro //quer dizer se ele pode esta atrelado a outro cupom
      table.timestamps()
    })
  }

  down () {
    this.drop('coupons')
  }
}

module.exports = CouponSchema

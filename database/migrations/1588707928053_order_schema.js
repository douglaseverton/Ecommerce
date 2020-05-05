'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.decimal('total', 12, 2).defaultTo(0.0) //total do pedido se não tiver nenhum valor vai mostar 0.0
      table.integer('user_id').unsigned() //usuario que vai receber o pedido
      table.enu('status', ['pending', 'cancelled', 'shipped', 'paid', 'finished']) //determina o status do pedido, pendente, cancelado, enviado, pago, finalizado
      table.timestamps()

      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema

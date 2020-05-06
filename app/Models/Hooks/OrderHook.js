'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async model => {
    model.$sideLoaded.subtotal = await model.items().getSum('subtotal') // estou dizendo aqui que na tabela de itens eu quero a soma da coluna subtotal
    model.$sideLoaded.qtd_items = await model.items().getSum('quantity')
    model.$sideLoaded.discount = await model.discounts().getSum('discount')
    model.total = model.$sideLoaded.subtotal - model.$sideLoaded.discount  // aqui estra me trazendo o resultado total com desconto do pedido
}

OrderHook.updateCollectionValues = async models => {
    for(let model of models) {
        model = await OrderHook.updateValues(model)
    }
}
'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Role = use('Role')

class RoleSeeder {
  async run () {
    // cria o admin
    await Role.create({
      name: 'Admin',
      slug: 'admin',
      description: 'Adminisatrador do sistema!'
    })

    //cria o gerente

    await Role.create({
      name: 'manager',
      slug: 'manager',
      description: 'gerente da loja'
    })

    await Role.create({
      name: 'Client',
      slug: 'client',
      description: 'Cliente da loja'
    })
  }
}

module.exports = RoleSeeder

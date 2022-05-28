import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'alter_user_table_drop_senha_add_passwords'

  public async up () {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('senha')
      table.string('password')
      // table.string('last_name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

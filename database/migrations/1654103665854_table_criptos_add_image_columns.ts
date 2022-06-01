import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'table_criptos_add_image_columns'

  public async up () {
    this.schema.alterTable('criptos', (table) => {
      table.string('image')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

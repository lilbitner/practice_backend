
exports.up = function(knex) {
  return knex.schema.createTable("client", client => {
      client.increments()
      client.string("client_title")
      client.number("number_of_portfolios")
      client.string("assets")
      client.string("change_in_assets")
      client.integer('advisor_id').references('id').inTable('advisor')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("client")
};
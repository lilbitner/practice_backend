
exports.up = function(knex) {
  return knex.schema.createTable("advisor", advisor => {
      advisor.increments()
      advisor.string("username")
      advisor.string("password_digest")
      advisor.string("business_title")
      advisor.string("total_assets")
      advisor.string("ytd_return")
      advisor.string("lifetime_return")
      advisor.integer("average_exposure")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("advisor")
};

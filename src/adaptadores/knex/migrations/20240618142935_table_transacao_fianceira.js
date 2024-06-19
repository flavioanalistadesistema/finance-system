/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const isTableExists = await knex.schema.hasTable("transacao_financeira");
  if (!isTableExists) {
    return knex.schema.createTable("transacao_financeira", (table) => {
      table.uuid("id").primary();
      table.string("descricao").notNullable();
      table.string("tipo").notNullable();
      table.decimal("valor").notNullable();
      table.string("status").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("transacao_financeira");
};

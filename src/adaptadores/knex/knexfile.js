const dotenv = require("dotenv");
dotenv.config({ path: "../../../.env" });

module.exports = {
  client: "pg",
  connection: "postgres://postgres:123456@localhost:5432/financeSystemCod3",
  migrations: {
    tableName: "knex_migrations",
  },
  pool: {
    min: 2,
    max: 10,
  },
};

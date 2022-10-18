const { Sequelize } = require("sequelize");
const {
  SQL_HOST,
  SQL_DIALECT,
  SQL_PORT,
  SQL_DB_NAME,
  SQL_USERNAME,
  SQL_PASSWORD,
} = process.env;
const sequelize = new Sequelize(SQL_DB_NAME, SQL_USERNAME, SQL_PASSWORD, {
  host: SQL_HOST,
  dialect: SQL_DIALECT,
  port: 3306,
});

const sync = async () => {
  await sequelize.sync();
};
module.exports = { sequelize, sync };

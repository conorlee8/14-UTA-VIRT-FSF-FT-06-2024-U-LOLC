const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',  // Changed to postgres
    port: process.env.DB_PORT || 5432,  // PostgreSQL default port
  }
);

module.exports = sequelize;

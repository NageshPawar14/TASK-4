const { Sequelize } = require('sequelize');
require('dotenv').config();

// console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
// console.log('DATABASE_USER:', process.env.DATABASE_USER);
// console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);
// console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
// console.log('DATABASE_DIALECT:', process.env.DATABASE_DIALECT);

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    logging: false
  }
);

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });//
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
};

module.exports = { sequelize, syncDatabase };//vishal nimbarte

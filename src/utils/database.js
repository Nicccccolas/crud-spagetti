const { Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'userSpagetti',
  username: 'postgres',
  password: '1234',
  port: 5432
})


module.exports = db

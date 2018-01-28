const db = require('../db')
const Sequelize = require('sequelize')

module.exports = db.define('color', {
  colorId: Sequelize.INTEGER,
  hexString: Sequelize.STRING,
  rgb: Sequelize.JSON,
  hsl: Sequelize.JSON,
  name: Sequelize.STRING
});
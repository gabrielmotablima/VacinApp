const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Citizen = require('../models/citizen')
const Religion = require('../models/religion')

const connection = new Sequelize(dbConfig)

Citizen.init(connection)
Religion.init(connection)

Citizen.associate(connection.models)
Religion.associate(connection.models)

module.exports = connection;
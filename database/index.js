const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Citizen = require('../models/citizen')
const Religion = require('../models/religion')
const Ethnicity = require('../models/religion')
const CivilStatus = require('../models/civilstatus')
const HealthPlan = require('../models/healthplan')

const connection = new Sequelize(dbConfig)

Citizen.init(connection)
Religion.init(connection)
Ethnicity.init(connection)
HealthPlan.init(connection)
CivilStatus.init(connection)

Citizen.associate(connection.models)
Religion.associate(connection.models)
Ethnicity.associate(connection.models)
HealthPlan.associate(connection.models)
CivilStatus.associate(connection.models)

module.exports = connection;
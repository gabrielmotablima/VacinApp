const express = require('express');
const models = require('./models')
const sequelize = require('sequelize');

const status = require('./helpers/http-status')
const cors = require("cors")
const mysql = require('mysql');

const port = 4040;
const host = '0.0.0.0';

const app = express();

app.use(cors())
app.use(express.json())

/**
 * ROUTES
 */
 const CitizenRoutes = require("./routes/CitizenRoutes")
 app.use('/citizen', CitizenRoutes)
 
 const AllergyRoutes = require('./routes/AllergyRoutes')
 app.use('/alergy', AllergyRoutes)
 
 const HealthPlanRoutes = require('./routes/HealthPlanRoutes')
 app.use('/healtPlan', HealthPlanRoutes)
 
 const ReligionRoutes = require('./routes/ReligionRoutes')
 app.use('/religion', ReligionRoutes)
 
 const VaccineRoutes = require('./routes/VaccineRoutes');
 const { response } = require('express');
 app.use('/vaccine', VaccineRoutes)

 /**
    * CONNECTION MYSQL-DOCKER
*/
  app.get('/', (req, res) => {
    var mysqlHost = process.env.MYSQL_HOST || 'localhost';
    var mysqlPort = process.env.MYSQL_PORT || '3306';
    var mysqlUser = process.env.MYSQL_USER || 'root';
    var mysqlPass = process.env.MYSQL_PASS || 'root';
    var mysqlDB = process.env.MYSQL_DB || 'vacinapp';

    var connectionOptions = {
        host: mysqlHost,
        port: mysqlPort,
        user: mysqlUser,
        password: mysqlPass,
        database: mysqlDB
    };

    console.log('MySQL Connection config:');
    console.log(connectionOptions);

    var connection = mysql.createConnection(connectionOptions);
    var queryStr = "SELECT * FROM MOE_ITEM_T";

    connection.connect();

    connection.query(queryStr, function (error, results, fields) {
        if (error) throw error;

        responseStr = '';

        results.forEach(function (data) {
            responseStr += data.ITEM_NAME + ' : '
            console.log(data)
        })

        if (responseStr.length == 0)
            responseStr = 'No records found'

        console.log(responseStr)

        res.status(status.success).send(responseStr)
    })
    connection.end()
})

app.listen(port, host);

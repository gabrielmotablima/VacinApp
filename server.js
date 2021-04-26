const express = require('express');
const models = require('./models')
const sequelize = require('sequelize');
const cors = require("cors")
const port = 4040;

const app = express();

app.use(cors())
app.use(express.json())

const CitizenRoutes = require("./routes/CitizenRoutes")
app.use('/citizen', CitizenRoutes)

const AllergyRoutes = require('./routes/AllergyRoutes')
app.use('/alergy', AllergyRoutes)

const HealthPlanRoutes = requrie('./routes/HealthPlanRoutes')
app.use('/healtPlan', HealthPlanRoutes)

const ReligionRoutes = require('./routes/ReligionRoutes')
app.use('/religion', ReligionRoutes)

const VaccineRoutes = require('./routes/VaccineRoutes')
app.use('/vaccine', VaccineRoutes)

app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})

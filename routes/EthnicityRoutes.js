const express = require('express')
const router = express.Router()

const EthnicityController = require('../controllers/EthnicityController')

router.post("/", EthnicityController.create)
router.put("/:id", EthnicityController.update)
router.get("/:id", EthnicityController.show)
router.get("/", EthnicityController.getAll)
router.delete("/:id", EthnicityController.delete)

module.exports = router

const express = require('express')
const router = express.Router()

const CivilStatusController = require('../controllers/CivilStatusController')

router.post("/", CivilStatusController.create)
router.put("/:id", CivilStatusController.update)
router.get("/:id", CivilStatusController.show)
router.delete("/:id", CivilStatusController.delete)

module.exports = router

const express = require('express')
const router = express.Router()

const VaccineController = require('../controllers/VaccineController')

router.post("/", VaccineController.create)
router.put("/:id", VaccineController.update)
router.get("/:id", VaccineController.show)
router.getAll("/", VaccineController.getAll)
router.delete("/:id", VaccineController.delete)

module.exports = router

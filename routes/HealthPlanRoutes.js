const express = require('express')
const router = express.Router()

const HealthPlanController = require('../controllers/HealthPlanController')

router.post("/", HealthPlanController.create)
router.put("/:id", HealthPlanController.update)
router.get("/:id", HealthPlanController.show)
router.get("/", HealthPlanController.getAll)
router.delete("/:id", HealthPlanController.delete)

module.exports = router

const express = require('express')
const router = express.Router()

const AllergyController = require('../controllers/AllergyController')

router.post("/", AllergyController.create)
router.put("/:id", AllergyController.update)
router.get("/:id", AllergyController.show)
router.get("/", AllergyController.getAll)
router.delete("/:id", AllergyController.delete)

module.exports = router

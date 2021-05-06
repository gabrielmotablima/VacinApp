const express = require('express')
const router = express.Router()

const DegreeController = require('../controllers/DegreeController')

router.post("/", DegreeController.create)
router.put("/:id", DegreeController.update)
router.get("/:id", DegreeController.show)
router.delete("/:id", DegreeController.delete)

module.exports = router

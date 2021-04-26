const express = require('express')
const router = express.Router()

const ReligionController = require('../controllers/ReligionController')

router.post("/", ReligionController.create)
router.put("/:id", ReligionController.update)
router.get("/:id", ReligionController.show)
router.getAll("/", ReligionController.getAll)
router.delete("/:id", ReligionController.delete)

module.exports = router

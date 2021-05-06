const express = require('express')
const router = express.Router()

const CitizenController = require('../controllers/CitizenController')

router.post("/", CitizenController.create)
router.put("/:id", CitizenController.update)
router.get("/:id", CitizenController.show)
router.delete("/:id", CitizenController.delete)
router.get("/list/all", CitizenController.getAll)
router.get("/list/cpf", CitizenController.getOrderByCpf)

module.exports = router

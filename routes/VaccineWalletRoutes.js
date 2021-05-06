const express = require('express')
const router = express.Router()

const VaccineWalletController = require('../controllers/VaccineWalletController')

router.post("/", VaccineWalletController.create)
router.put("/:id", VaccineWalletController.update)
router.get("/:id", VaccineWalletController.show)
router.delete("/:id", VaccineWalletController.delete)

module.exports = router

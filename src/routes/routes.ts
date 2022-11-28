
const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const router = Router()

router.get("/contacts", UsersController.index)
router.get("/contacts/:id", UsersController.show)
router.delete("/contacts/:id", UsersController.delete)
router.post("/contacts", UsersController.store)
router.put("/contacts/:id", UsersController.update)

module.exports = router
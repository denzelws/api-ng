
const { Router } = require('express')

const UsersController = require('../controllers/UsersController')
const AccountController = require('../controllers/AccountController')

const router = Router()

router.get("/users", UsersController.index)
router.get("/users/:id", UsersController.show)
router.delete("/users/:id", UsersController.delete)
router.post("/users", UsersController.store)
router.put("/users/:id", UsersController.update)

router.get("/accounts", AccountController.index)
router.get("/accounts/:id", AccountController.show)
router.post("/accounts", AccountController.store)
router.put("/accounts/:id", AccountController.update)

module.exports = router
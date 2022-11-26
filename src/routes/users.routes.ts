
const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const userController = new UsersController()

const usersRoutes = Router()

usersRoutes.post("/users", userController.create)

module.exports = usersRoutes
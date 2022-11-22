import { Request, Response, Router } from "express";
import { UserController } from './controllers/UserController'

const express = require('express')
const router = express.Router()
const pool = './database/connection'
const bcrypt = require('bcrypt')

const routes = Router()

routes.post('/usuario', new UserController().create)

routes.get('/', (req:Request, res:Response) => {
    res.json({
        info: 'Nodejs deu certo'
    })
})

router.post("/login", (req:Request , res: Response) => {
  
})

export default routes
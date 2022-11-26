import { Request, Response } from "express";

const postgresConnection = require('../database/connection')

class UsersController {
    async create(req: Request, res: Response){
      const { name, password } = req.body
      
      const database = await postgresConnection()
       
      await database.run("INSERT INTO users.usuarios (name, password) VALUES (?,?)",
      [name,password]
      )

      res.status(201).json()
    }
}

module.exports = UsersController
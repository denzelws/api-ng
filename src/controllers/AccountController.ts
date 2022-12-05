import { Request, Response } from "express";
const AccountsRepository = require('../repositories/AccountsRepository')

class AccountController{
  async index(req:Request , res: Response) {
    const accounts = await AccountsRepository.findAll()

    res.json(accounts)
  }
 
  async show(req: Request , res: Response) {
    const { id } = req.params
    
    const account = await AccountsRepository.findById(id)

    if(!account) {
      return res.status(404).json({error: "Account not Found"})
    }

    res.json(account)

  }

  async store(req:Request , res: Response) {
    const { balance } = req.body

    const account = await AccountsRepository.create({ balance })

    res.json(account)
  }
  
  async update(req: Request, res: Response){
     const { id } =  req.params
     const { balance } = req.body

     const accountExists = await AccountsRepository.findById(id)

     if(!accountExists) {
      return res.status(404).json({ error: "Account not found"})
    }
     
    const account =  await AccountsRepository.update(id, {balance})

    res.json(account)
  }

}

module.exports = new AccountController()
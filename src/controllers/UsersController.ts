import { Request, response, Response } from "express";

const ContactsRepository = require('../repositories/ContactsRepository')

class UsersController {
    // listar registros
    async index(req: Request, res: Response) {
      const contacts = await ContactsRepository.findAll()

      res.json(contacts)
    }
    
    // obter um registro
    async show(req, res) {
      const { id } = req.params
      const contact = await ContactsRepository.findById(id)
   
      if(!contact) {
        return res.status(404).json({error: "User not Found"})
      }

      res.json(contact)
    }

    async store(req,res) {
     const {  name,
      email,
      phone,
      category_id } = req.body

      if(!name) {
        return res.status(400).json({ error: "Name is required" })
      }
     
     const contactExists = await ContactsRepository.findByEmail(email)

     if(contactExists) {
      return res.status(400).json({ error: "This e-mail is already in use" })
     }

     const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id
     })

     res.json(contact)

    }

    async update(req, res) {
      const { id } = req.params

      const {
        name, email, phone, category_id 
      } = req.body

      const contactExists = await ContactsRepository.findById(id)

      if(!contactExists) {
        return res.status(404).json({ error: "User not found"})
      }

      if(!name) {
        return res.status(400).json({ error: "Name is required "})
      }

      const contactByEmail = await ContactsRepository.findByEmail(email)
     if(contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: "This e-mail is already in use" })
     }
     
     const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id 
     })
      
     res.json(contact)
    }

    async delete(req, res) {
      const { id } = req.params
      
      const contact = await ContactsRepository.findById(id)
     
      if(!contact) {
        return res.status(404).json({ error: "User not found"})
      }

      await ContactsRepository.delete(id)
      res.sendStatus(204)

    }
}

// singleton
module.exports = new UsersController()
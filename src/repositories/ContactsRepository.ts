const { v4 } = require('uuid')

const bd = require('../database')

let contacts = [
    {
        id: v4(),
        name: 'Denzel',
        email: 'denzel@email.com',
        phone: '514566',
        category_id: v4()
    },
    {
        id: v4(),
        name: 'José',
        email: 'jose@email.com',
        phone: '514fsagfas566',
        category_id: v4()
    },
]

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts))
    }

    
    findByEmail(email) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.email === email),
        ))
    }

    findById(id) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id === id),
        ))
    }

    delete(id) {
        return new Promise<void>((resolve) => {
         contacts = contacts.filter((contact) => contact.id !== id)
         resolve()
        })
    }
    
    async create({ 
       name, 
       password
    }) {
         const [row] = await bd.query(`INSERT INTO users.usuarios(name, password)
         VALUES ($1, $2)
         RETURNING *
         `, [name, password])

         return row
         }


    update(id,{
        name, email, phone, category_id 
    }) {
        return new Promise((resolve) => {
            const updatedContact = {
               id,
               name,
               email,
               phone,
               category_id
            }
            
           contacts = contacts.map((contact) => (
            contact.id === id ? updatedContact : contact
           ))
           
           resolve(updatedContact)
           })
    }
}

module.exports = new ContactsRepository()
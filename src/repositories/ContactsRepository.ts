export {}

const { v4 } = require('uuid')

const database = require('../database')

export {}

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
    async findAll(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
        const rows = await database.query(`
        SELECT users.* 
        from users 
        LEFT JOIN accounts ON accounts.id = users.account_id
        ORDER BY name ${direction}
        `)
        return rows
    }


    async findById(id) {
       const [row] = await database.query(`
       SELECT users.* 
       FROM users 
       LEFT JOIN accounts ON accounts.id = users.account_id
       WHERE users.id = $1
       WHERE id = $1
       `,[id])
       return row
    }

    delete(id) {
        return new Promise<void>((resolve) => {
         contacts = contacts.filter((contact) => contact.id !== id)
         resolve()
        })
    }
    
    async create({ 
       name, 
       password,
       account_id
    }) {
        const [row] = await database.query(`
        INSERT INTO users(name, password, account_id) 
        VALUES($1, $2, $3)
        RETURNING *
      `,[name,password,account_id]);

        return row
    }
         


    async update(id,{
        name, 
       password,
       account_id
    }) {
        const [row] = await database.query(`
        UPDATE users
        SET name = $1, password = $2, account_id = $3
        WHERE id = $4
        RETURNING *
        `,[name, password, account_id, id])

        return row
    }
}

module.exports = new ContactsRepository()
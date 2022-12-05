export {}

const database = require('../database')

class AccountsRepository{
    async findAll(){
      const rows = await database.query(`
      SELECT * FROM accounts ORDER by balance
      `)

      return rows
    }

    async findById(id){
       const [row] = await database.query(`
       SELECT * FROM accounts WHERE id = $1
       `,[id])

       return row
    }

    async create({ balance }){
       const [row] = await database.query(`
       INSERT INTO accounts(balance)
       VALUES($1)
       RETURNING *
       `, [balance])

       return row
    }

    async update(id, {
      balance
    }) {
      const [row] = await database.query(`
       UPDATE accounts 
       SET balance = $1
       WHERE id = $2
       RETURNING *
      `,[balance, id])

      return row
    }


}

module.exports = new AccountsRepository()
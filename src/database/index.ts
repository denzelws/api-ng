
const { Client } = require('pg')

const client = new Client({
    user: "ngdb",
    host: "localhost",
    database: "ngdb",
    password: "ngdb",
    port: 5432
})

client.connect()

// função para verificar rows
exports.query = async (query, values) => {
    const { rows } = await client.query(query, values)
    return rows
}


// funcao para verificar valores no banco
// async function Query(query) {
//     const { rows } = await client.query('SELECT * FROM users')

//     return rows
// }

// Query('SELECT * FROM users').then(console.log)


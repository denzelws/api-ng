
const { Client } = require('pg')

const client = new Client({
    user: "api-ng",
    host: "localhost",
    database: "api-ng",
    password: "123456",
    port: 5433
})

client.connect()

// função para verificar rows
exports.query = async (query) => {
    const { rows } = await client.query(query)
    return rows
}

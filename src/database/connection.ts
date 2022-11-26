
const { Client } = require('pg')

async function postgresConnection() {
    const client = new Client({
        user: "api-ng",
        host: "localhost",
        database: "api-ng",
        password: "123456",
        port: 5433
    }) 
    await client.connect(() => console.log('Conected to db'))
}

module.exports = postgresConnection

